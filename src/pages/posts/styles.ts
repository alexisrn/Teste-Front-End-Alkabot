import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Post = styled.div`
  width: 81%;
  height: 100vh;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    button {
      width: 100px;
      height: 40px;

      background-color: #ba75ff;
      color: white;

      border: none;
      border-radius: 15px;

      font-weight: 500;

      cursor: pointer;
    }
  }
`;
