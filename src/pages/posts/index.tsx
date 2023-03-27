import { useState, useEffect } from "react";

import { RecentPosts } from "../../components/recentPosts";
import { Header } from "../../layout/header";
import * as S from "./styles";
import { Footer } from "../../layout/footer";
import { PostCard } from "../../components/cards/postsCard";

interface RespoData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [posts, setPosts] = useState<RespoData[]>([]);
  const [elements, setElements] = useState(10);

  const getPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleLoadMore = () => {
    setElements(elements + elements);
  };

  const slice = posts.slice(0, elements);

  return (
    <>
      <S.Container>
        <S.Post>
          {slice.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                user={post.userId}
                title={post.title}
                body={post.body}
              />
            );
          })}
          <div className="btn">
            <button onClick={handleLoadMore}>More Posts</button>
          </div>
        </S.Post>
      </S.Container>
    </>
  );
};
