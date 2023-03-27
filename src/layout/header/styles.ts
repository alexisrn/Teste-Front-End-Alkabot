import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 60px;

  border-bottom: 1px solid #ba75ff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  span {
    font-size: 30px;
    color: #ba75ff;
  }
  ul {
    display: flex;
    column-gap: 30px;
    list-style-type: none;

    font-size: 18px;
    font-weight: 500;
    color: #ba75ff;

    margin-left: 60px;
  }

  p {
    cursor: pointer;
    color: #ba75ff;
    font-size: 22px;
  }
  li {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #ba75ff;
  }
  li:hover {
    color: black;
  }

  form {
    display: flex;
  }

  button {
    cursor: pointer;
    height: 30px;
    width: 35px;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;

    background-color: #ba75ff;
    border: none;
    border-radius: 7px 0 0 7px;
  }
  button:hover {
    background-color: #ac5cfc;
  }

  @media (min-width: 700px) {
    p {
      display: none;
    }
  }

  @media (max-width: 700px) {
    ul,
    span {
      display: none;
    }
  }
`;
export const Input = styled.input`
  height: 30px;
  width: 150px;
  border: 1px solid #ba75ff;
  border-radius: 0 7px 7px 0;
  :focus {
    box-shadow: 0 0 0 0;

    outline: 0;
  }
`;
