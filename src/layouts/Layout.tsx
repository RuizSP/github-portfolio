import { Outlet } from "react-router-dom";
import { UserCard } from "../components/UserCard";
import { Box } from "@mui/material";

export function Layout()
{
    return(
        <Box>
            <header>
                <UserCard/>
            </header>
            <main>
                <Outlet/>
            </main>
        </Box>
    )
}