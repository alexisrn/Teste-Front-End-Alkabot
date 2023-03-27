import { useEffect, useState } from "react";
import * as S from "./styles";
import { CardImportantPosts } from "../cards/importantPostsCard";

interface RespoData {
  id: number;
  name: string;
  title: string;
  body: string;
}

export const ImportantPosts: React.FC = () => {
  const [posts, setPosts] = useState<RespoData[]>([]);
  const [elements, setElements] = useState(2);

  const getPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const slice = posts.slice(0, elements);

  return (
    <>
      <S.Container>
        <h3>Importants Posts</h3>
        <S.CtnCards>
          {posts
            ? slice.map((post, index) => {
                return (
                  <>
                    <CardImportantPosts
                      key={index}
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  </>
                );
              })
            : null}
        </S.CtnCards>
      </S.Container>
    </>
  );
};
