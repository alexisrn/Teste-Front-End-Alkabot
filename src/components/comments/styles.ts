import styled from "styled-components";

export const Container = styled.div`
  width: 60%;

  padding: 20px 0;

  @media (max-width: 750px) {
    width: 300px;
  }
`;

export const CommetsTitle = styled.h3`
  font-size: 22px;
  padding: 10px 5px;
`;

export const InputCtn = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  column-gap: 50px;

  @media (max-width: 750px) {
    column-gap: 10px;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 60px;

  border: 1px solid #ba75ff;
  border-radius: 15px;
`;

export const Btn = styled.button`
  cursor: pointer;

  width: 20%;
  height: 60px;

  border: none;
  border-radius: 15px;

  background-color: #ba75ff;
  color: white;

  font-size: 14px;
  font-weight: 500;

  @media (max-width: 750px) {
    font-size: 10px;
  }
`;
