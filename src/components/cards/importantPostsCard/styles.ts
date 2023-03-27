import styled from "styled-components";

export const Container = styled.div`
  height: 480px;
  width: 35%;

  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
  a {
    text-decoration: none;
    color: black;
  }

  .img {
    width: 100%;
    height: 60%;

    background-color: #d6d6d6;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 10px 10px 0 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 950px) {
    height: 600px;
  }
  @media (max-width: 730px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  padding: 30px;

  .userText {
    margin: 15px 0 10px 0;
    color: #ba75ff;
    font-size: 14px;
  }

  .post {
    padding: 10px 0;
  }
  h4 {
    cursor: pointer;
    font-size: 18px;
  }
  h4:hover {
    color: #ba75ff;
  }
  .showMore {
    cursor: pointer;
    text-align: end;
    font-size: 12px;
    color: #ba75ff;
  }

  @media (max-width: 950px) {
  }
`;
