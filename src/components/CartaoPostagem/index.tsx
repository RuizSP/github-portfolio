import { Card, Typography } from "@mui/material";
import { IPostagem } from "../../interfaces/IPostagem";
interface ICartaoPostagem {
  postagem: IPostagem;
}
export function CartaoPostagem({ postagem }: ICartaoPostagem) {
  return (
    <Card>
      <Typography>{postagem.title}</Typography>
      <Typography>{postagem.body}</Typography>
    </Card>
  );
}
