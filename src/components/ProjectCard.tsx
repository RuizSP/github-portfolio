import {
  Card,
  Typography,
  Button,
  Divider,
  Chip,
  Link,
  Box,
} from "@mui/material";
import { IProjects } from "../interfaces/IProjects";

interface IProjectcardProps {
  project: IProjects;
  isLoading?: boolean;
}

export function ProjectCard({ project }: IProjectcardProps) {
  return (
    <Card
      color="secondary"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        maxWidth: "80%",
        height: "fit-content",
        gab: "10px",
        margin: "5px",
        padding: "5px",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" component="h5">
        {project.name}
      </Typography>
      <Typography variant="body2">{project.description}</Typography>
      <Divider sx={{ width: "30%" }}></Divider>
      <Box>
        <Chip label={`Licence: ${project.license}`}></Chip>
        <Chip label={`Watchers: ${project.watchers} `}></Chip>
        <Chip label={`Language: ${project.language}`}></Chip>
      </Box>
      <Link
        color="primary"
        sx={{
          border: "2px solid",
          borderRadius: "6px",
          width: "10%",
          textDecoration: "none",
          textAlign: "center",
        }}
        href={project.html_url}
      >
        Ver no Github
      </Link>
    </Card>
  );
}
