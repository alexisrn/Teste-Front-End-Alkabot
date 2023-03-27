import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 100%;
  margin-bottom: 30px;
  border-bottom: 1px solid #ba75ff;

  .title {
    margin-top: 50px;
    padding: 20px 0;
    font-size: 22px;
    color: #ba75ff;
    width: 80vw;

    border-bottom: 1px solid #ba75ff;
  }

  .btn {
    display: flex;
    justify-content: center;
    button {
      cursor: pointer;
      text-align: center;
      font-size: 15px;
      font-weight: 600;
      padding: 45px 0;
      border: none;
      background-color: transparent;
    }
    button:hover {
      color: #ba75ff;
    }
  }

  @media (max-width: 850px) {
    border: none;
    .btn {
      margin-top: 20px;
      font-size: 30px;
    }
  }
`;
