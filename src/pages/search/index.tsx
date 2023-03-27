import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { PostCard } from "../../components/cards/postsCard";

interface RespoData {
  id: number;
  userId: number;
  name: string;
  title: string;
  body: string;
}

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<RespoData[]>([]);

  const getPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    getPosts;
  }, []);

  return (
    <>
      {posts.map((post) => {
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
    </>
  );
};
