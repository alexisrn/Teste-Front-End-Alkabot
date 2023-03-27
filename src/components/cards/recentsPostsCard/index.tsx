import * as S from "./styles";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CardsRecentPosts = ({ userId, title, body, id }: any) => {
  let description = title;
  return (
    <>
      <S.CtnMaster>
        <Link to={`post/${id}`}>
          <S.Container>
            <S.Img>
              <img src="https://picsum.photos/640/360" />
            </S.Img>
            <S.Content>
              <S.Title>{title}</S.Title>
              <S.User>user{userId}</S.User>
              <S.Body>{body}</S.Body>
            </S.Content>
          </S.Container>
        </Link>
      </S.CtnMaster>
    </>
  );
};
