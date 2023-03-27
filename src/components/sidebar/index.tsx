import * as S from "./styles";
import { AiFillCloseSquare, AiOutlineSend, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SideBar = ({ active }: any) => {
  const closeSideBar = () => {
    active(false);
  };
  return (
    <>
      <S.Container>
        <p onClick={closeSideBar}>
          <AiFillCloseSquare />
        </p>
        <S.MenuList>
          <Link to="/">
            <p>
              <b>
                <AiFillHome />
              </b>
              Home
            </p>
          </Link>
          <Link to="/post">
            <p>
              <b>
                <AiOutlineSend />
              </b>
              Posts
            </p>
          </Link>
        </S.MenuList>
      </S.Container>
    </>
  );
};
