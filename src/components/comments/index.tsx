import { CommentsCard } from "../cards/commentsCard";
import * as S from "./styles";
import { useEffect, useState } from "react";

interface RespoDataComent {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: number;
}

const urlPosts = "https://jsonplaceholder.typicode.com/posts";

export const Comments = ({ id }: any) => {
  const [comments, setComments] = useState<RespoDataComent>();

  const getComments = async (url: any) => {
    const res = await fetch(url);
    const data = await res.json();

    setComments(data);
  };

  useEffect(() => {
    const itemUrl = `${urlPosts}/${id}/comments`;
    getComments(itemUrl);
  }, []);

  return (
    <>
      <S.Container>
        <S.CommetsTitle>Comments</S.CommetsTitle>

        <S.InputCtn>
          <S.Input type="text" />
          <S.Btn>Comment</S.Btn>
        </S.InputCtn>
        {comments &&
          comments.map((comment: RespoDataComent) => {
            return (
              <CommentsCard
                key={comment.id}
                id={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
      </S.Container>
    </>
  );
};
