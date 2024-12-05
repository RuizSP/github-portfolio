import { Card, Avatar, Chip, Typography, Link, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { useQuery } from "react-query";
import { getUser } from "../api/api";

export function UserCard() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Card>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Avatar src={data?.avatar_url} />
        <Typography variant="h3" component="h3">
          {" "}
          {data?.login}
        </Typography>
      </Box>
      <Typography variant="body2">{data?.bio}</Typography>
      <Chip label={`Followers: ${data?.followers}`}></Chip>
      <Chip label={`Following: ${data?.following}`}></Chip>
      <Box>
        <Link href={data?.html_url}>
          <GitHub />
          Ver no Github
        </Link>
      </Box>
    </Card>
  );
}
