import styled from "styled-components";

export const Container = styled.div`
  width: 81%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px 130px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ReturnBtn = styled.div`
  padding: 10px 0;
  width: 100%;

  font-size: 25px;

  cursor: pointer;

  a {
    text-decoration: none;
    color: #ba75ff;
  }
`;

export const Title = styled.h2`
  margin-top: 50px;
  font-size: 35px;
  width: 70%;
  text-align: center;
  @media (max-width: 750px) {
    width: 300px;
    font-size: 20px;
  }
`;

export const User = styled.p`
  padding: 10px 0;
  font-size: 18px;

  font-weight: 600;
  color: #ba75ff;
`;

export const Img = styled.div`
  width: 70%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    width: 300px;
    height: 100%;
  }
`;

export const Body = styled.div`
  padding: 50px 0;
  width: 70%;

  font-size: 20px;

  border-bottom: 1px solid #ba75ff;
  @media (max-width: 750px) {
    width: 300px;
    height: 100%;

    font-size: 16px;
  }
`;

export const ShareIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 30px;
  padding: 10px;

  width: 100%;

  font-size: 20px;
  color: #ba75ff;

  @media (max-width: 750px) {
    width: 300px;
    font-size: 20px;
  }
`;

export const Icons = styled.div`
  span {
    cursor: pointer;
    padding: 5px;
  }
`;
