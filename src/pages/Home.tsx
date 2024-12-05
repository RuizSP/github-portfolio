import { AppBar, Box, Button, TextField } from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { useQuery } from "react-query";
import { getProjects } from "../api/api";
import { IProjects } from "../interfaces/IProjects";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";

export function Home() {
  const [filterString, setFilterString] = useState<string>("");

  const { data = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  const dataFiltered = data.filter((project) =>
    project.name.toLowerCase().includes(filterString.toLowerCase())
  );

  return (
    <>
      <Search
        filterString={filterString}
        setFilterString={setFilterString}
        placeholder="Buscar Projeto"
      ></Search>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {dataFiltered!.map((project: IProjects) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              isLoading={isLoading}
            ></ProjectCard>
          );
        })}
      </div>
    </>
  );
}
