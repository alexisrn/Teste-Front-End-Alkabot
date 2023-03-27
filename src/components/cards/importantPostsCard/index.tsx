import * as S from "./styles";
import { Link } from "react-router-dom";

export const CardImportantPosts = ({ id, title, body }: any) => {
  let textTitle = title;
  if (textTitle.length > 20) {
    textTitle = textTitle.substring(0, 40) + "...";
  }

  let description = body;
  if (description.length > 80) {
    description = description.substring(0, 80) + "...";
  }

  return (
    <>
      <S.Container>
        <Link to={`post/${id}`}>
          <div className="img">
            <img src="https://picsum.photos/560/300" />
          </div>

          <S.Content>
            <h4>{textTitle}</h4>
            <p className="userText">User{id}</p>
            <span className="post">{description}</span>

            <p className="showMore">Show More</p>
          </S.Content>
        </Link>
      </S.Container>
    </>
  );
};
