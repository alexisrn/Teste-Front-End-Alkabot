import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;

  border-radius: 10px;
  background-color: #f8f8f8;

  margin-top: 15px;

  display: flex;

  @media (max-width: 750px) {
    width: 300px;
    margin-bottom: 50px;
  }
`;

export const ImgCtn = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: 80%;
  height: 70%;

  background-color: grey;

  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-weight: bold;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 10px 20px;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Email = styled.div`
  font-size: 12px;
  padding: 5px 0;
  color: #ba75ff;
`;

export const Body = styled.div`
  font-size: 14px;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;
