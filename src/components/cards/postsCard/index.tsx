import * as S from "./styles";
import { Link } from "react-router-dom";

export const PostCard = ({ title, user, body, id }: any) => {
  let textTitle = title;
  if (textTitle.length > 40) {
    textTitle = textTitle.substring(0, 40) + "...";
  }

  let description = body;
  if (description.length > 70) {
    description = description.substring(0, 70) + "...";
  }

  return (
    <>
      <S.CtnMaster>
        <Link to={`${id}`}>
          <S.Container>
            <div className="img">
              <img src="https://picsum.photos/560/300" />
            </div>
            <div className="content">
              <h4>{textTitle}</h4>
              <p className="user">User{user}</p>
              <div className="text">{description}</div>
              <div className="showMore">
                <span>Show More</span>
              </div>
            </div>
          </S.Container>
        </Link>
      </S.CtnMaster>
    </>
  );
};
