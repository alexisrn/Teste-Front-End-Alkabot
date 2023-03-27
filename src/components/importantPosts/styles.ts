import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 100%;

  h3 {
    font-size: 30px;
    text-align: center;
    padding: 30px;
  }
`;

export const CtnCards = styled.div`
  width: 80vw;
  height: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
