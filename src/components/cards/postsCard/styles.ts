import styled from "styled-components";

export const CtnMaster = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  .img {
    width: 25%;
    height: 100%;

    box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
    border-radius: 10px 0 0 10px;

    img {
      width: 100%;
      height: 100%;

      border-radius: 10px 0 0 10px;
    }
  }
  .content {
    width: 55%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.22);
    padding: 10px 50px;

    h4 {
      font-size: 14px;
      cursor: pointer;
    }
    h4:hover {
      color: #ba75ff;
    }
    .user {
      padding: 10px 0;
      font-size: 12px;
      color: #ba75ff;
      font-weight: 600;
    }

    .text {
      font-size: 12px;
      width: 90%;
    }

    .showMore {
      margin-top: 20px;

      width: 90%;

      display: flex;
      justify-content: end;

      font-size: 12px;

      color: #ba75ff;
      span {
        cursor: pointer;
      }
      span:hover {
        color: #802fd1;
      }
    }
  }

  .content:hover {
    background-color: #f8f8f8;
    cursor: pointer;
  }

  @media (max-width: 730px) {
    height: 300px;
    span {
      display: none;
    }
  }
`;
