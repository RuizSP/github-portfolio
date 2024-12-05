import { Link, Outlet } from "react-router-dom";
import { UserCard } from "../components/UserCard";
import { Box } from "@mui/material";

export function Layout() {
  return (
    <Box>
      <header>
        <UserCard />
        <Box>
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>Postagens</Link>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
