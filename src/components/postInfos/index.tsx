import { Footer } from "../../layout/footer";
import { Comments } from "../comments";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const PostInfos = ({ userId, title, body, id }: any) => {
  return (
    <>
      <S.Container>
        <S.ReturnBtn>
          <Link to="/post">
            <BsFillArrowLeftCircleFill />
          </Link>
        </S.ReturnBtn>
        <S.Title>{title}</S.Title>
        <S.User>User{userId}</S.User>
        <S.Img>
          <img src="https://picsum.photos/640/360" />
        </S.Img>
        <S.Body>
          <p>{body}</p>
        </S.Body>
        <S.ShareIcons>
          <p>Share this</p>

          <S.Icons>
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsTwitter />
            </span>
            <span>
              <BsInstagram />
            </span>
          </S.Icons>
        </S.ShareIcons>
        <Comments id={id} />
      </S.Container>

      <Footer />
    </>
  );
};
