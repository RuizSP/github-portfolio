import { Card,Typography, Button, Divider, Chip, Link } from "@mui/material";
import { IProjects } from "../interfaces/IProjects";


interface IProjectcardProps{
   project: IProjects,
   isLoading?: boolean
}


export function ProjectCard({project}:IProjectcardProps)
{
 return(
    <Card>
        <Typography variant="h5" component="h5">{project.name}</Typography>
        <Typography variant="body2">{project.description}</Typography>
        <Divider></Divider>
       <Chip label={`Licence: ${project.license}`}></Chip>
       <Chip label={`Watchers: ${project.watchers} `}></Chip>
       <Chip label={`Language: ${project.language}`}></Chip>
       <Link href={project.html_url} >Ver no Github</Link>
    </Card>
 );   
}