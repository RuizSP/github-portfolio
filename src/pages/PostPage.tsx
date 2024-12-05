import { Search } from "../components/Search";
import { AdicionarPostagemModal } from "../components/AdicionarPostagemModal";
import { createContext, useState } from "react";
import { IPostagem } from "../interfaces/IPostagem";
import { CartaoPostagem } from "../components/CartaoPostagem";

export const PostagemContext = createContext({} as any);

export function PostPage() {
  const [postagens, setPostagens] = useState<IPostagem[]>([]);
  const [filteredString, setFilterString] = useState<string>("");

  const filteredPosts = postagens.filter((post) =>
    post.title.toLocaleLowerCase().includes(filteredString.toLowerCase())
  );

  function handleAddPostagem(post: IPostagem) {
    post.id = postagens.length + 1;
    const updatedPostagem = [...postagens, post];
    setPostagens(updatedPostagem);
  }

  return (
    <>
      <Search
        placeholder="Buscar Postagem"
        filterString={filteredString}
        setFilterString={setFilterString}
      ></Search>
      <div>
        <PostagemContext.Provider value={{ handleAddPostagem }}>
          <AdicionarPostagemModal></AdicionarPostagemModal>
        </PostagemContext.Provider>
      </div>
      <div>
        {filteredPosts.map((post) => {
          return (
            <CartaoPostagem key={post.id} postagem={post}></CartaoPostagem>
          );
        })}
      </div>
    </>
  );
}
