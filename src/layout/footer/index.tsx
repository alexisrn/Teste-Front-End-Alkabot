import * as S from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <S.Container>
        <S.Logo>
          <h1>Logo</h1>
        </S.Logo>

        <S.Links>
          <ul>
            <li>
              <a href="https://github.com/alexisrn">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raphael-alexis-3704531b9/">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </S.Links>

        <S.Copy>
          <p>&copy;Your Company</p>
        </S.Copy>
      </S.Container>
    </>
  );
};
