import * as S from "./styles";

export const CommentsCard = ({ id, name, email, body }: any) => {
  return (
    <>
      <S.Container>
        <S.ImgCtn>
          <S.Img>{id}</S.Img>
        </S.ImgCtn>
        <S.Content>
          <S.Name>{name}</S.Name>
          <S.Email>{email}</S.Email>
          <S.Body>{body}</S.Body>
        </S.Content>
      </S.Container>
    </>
  );
};
