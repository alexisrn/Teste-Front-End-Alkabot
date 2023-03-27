import styled from "styled-components";

export const CtnMaster = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Container = styled.div`
  height: 250px;

  display: flex;
  padding: 30px 0;
`;

export const Img = styled.div`
  cursor: pointer;
  width: 30%;
  height: 100%;

  background-color: grey;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 0 30px;
  width: 600px;
  @media (max-width: 700px) {
    height: 100%;
  }
`;

export const Title = styled.h4`
  cursor: pointer;
  font-size: 22px;

  :hover {
    color: #ba75ff;
  }
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const User = styled.p`
  padding: 5px 0;
  margin-bottom: 20px;
  font-size: 16px;
  color: #ba75ff;
  @media (max-width: 700px) {
  }
`;

export const Body = styled.p`
  width: 320px;
  @media (max-width: 700px) {
    width: 280px;
  }
`;
