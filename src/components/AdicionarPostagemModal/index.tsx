import {
  Button,
  Dialog,
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { Add, Close } from "@mui/icons-material";
import { PostagemContext } from "../../pages/PostPage";
import { IPostagem } from "../../interfaces/IPostagem";
import { useForm } from "react-hook-form";

export function AdicionarPostagemModal() {
  const [open, setOpen] = useState<boolean>(false);
  const { handleAddPostagem } = useContext(PostagemContext);
  const { register, handleSubmit } = useForm<IPostagem>();
  function handleClose() {
    setOpen(false);
  }

  function addNewPostagem(post: IPostagem) {
    handleAddPostagem(post);
    setOpen(false);
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Add></Add>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <IconButton onClick={handleClose}>
          <Close></Close>
        </IconButton>
        <form onSubmit={handleSubmit(addNewPostagem)}>
          <label htmlFor="titulo">Titulo do Post</label>
          <input type="text" {...register("title")} />
          <label htmlFor="body">Post</label>
          <input type="text" {...register("body")} />
          <input type="submit" />
        </form>
      </Dialog>
    </>
  );
}
