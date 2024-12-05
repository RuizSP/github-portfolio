import { Card, Avatar, Chip, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getUser } from "../api/api";

export function UserCard()
{
   const {data, isLoading} = useQuery({queryKey:["user"], queryFn:getUser})
   if(isLoading){
      return(<h2>Loading...</h2>)
   }
 return(
    <Card>
        <Avatar src={data?.avatar_url}/>
        <Typography variant="h3" component="h3"> {data?.login}</Typography>
        <Typography variant="body2">{data!.bio}</Typography>
       <Chip label={`Followers: ${data?.followers}`}>
       </Chip>
       <Chip label={`Following: ${data?.following}`}></Chip>
    </Card>
 );   
}