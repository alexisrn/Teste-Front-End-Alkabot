import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { PostInfos } from "../../components/postInfos";

interface RespoData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const urlPosts = "https://jsonplaceholder.typicode.com/posts/";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<RespoData>();

  const getPosts = async (url: any) => {
    const res = await fetch(url);
    const data = await res.json();

    setPost(data);
  };

  useEffect(() => {
    const itemUrl = `${urlPosts}/${id}`;
    getPosts(itemUrl);
  }, []);

  return (
    <>
      {post && (
        <PostInfos
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      )}
    </>
  );
};
