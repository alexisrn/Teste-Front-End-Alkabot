import { useEffect, useState } from "react";
import * as S from "./styles";
import { CardsRecentPosts } from "../cards/recentsPostsCard";
import { Link } from "react-router-dom";

interface RespoData {
  id: number;
  userId: number;
  name: string;
  title: string;
  body: string;
}

export const RecentPosts = () => {
  const [posts, setPosts] = useState<RespoData[]>([]);
  const [elements, setElements] = useState(6);

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
        <div className="title">
          <h3>The Latest</h3>
        </div>
        {slice.map((post, index) => {
          return (
            <CardsRecentPosts
              id={post.id}
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          );
        })}
        <div className="btn">
          <Link to="/post">
            <button>Show All Posts</button>
          </Link>
        </div>
      </S.Container>
    </>
  );
};
