import { Button, TextField } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { useQuery } from "react-query";
import { getProjects } from "../api/api";
import { IProjects } from "../interfaces/IProjects";
import { useState } from "react";

export function Home()
{

    const[filterString, setFilterString] = useState<string>("");

    const {data =[], isLoading} = useQuery({queryKey:["projects"], queryFn:getProjects});
    const dataFiltered = data.filter((project) => project.name.toLowerCase().includes(filterString.toLowerCase()));

    return(
        <>
            <div>
                <TextField placeholder="Buscar projeto" value={filterString} onChange={(e) => setFilterString(e.target.value)}>

                </TextField>
            </div>
            <div>
               {
                dataFiltered!.map((project:IProjects) =>{
                    return(
                        <ProjectCard key={project.id} project={project} isLoading={isLoading}></ProjectCard>
                    )
                })
               }
            </div>

        </>
    )
}