import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 200px;

  background-color: #ba75ff;
  bottom: 0;
  color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 320px) {
    width: 100%;

    flex-direction: column;
  }
`;
export const Logo = styled.div``;

export const Links = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    column-gap: 30px;
    font-size: 25px;
  }
  a {
    color: white;
  }
`;

export const Copy = styled.div``;
