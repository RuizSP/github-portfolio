import axios from "axios";
import { IUser } from "../interfaces/IUser";
import { IProjects } from "../interfaces/IProjects";

const app = axios.create({
    baseURL: "https://api.github.com/users",
});


export const getUser = async ():Promise<IUser> =>{
    const response = await app.get("/RuizSp");
    return response.data;
}

export const getProjects = async ():Promise<IProjects[]> =>{
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await app.get("/RuizSp/repos");
    return response.data;
}
