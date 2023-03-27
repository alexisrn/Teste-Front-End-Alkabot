import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: 1px 1px 2px grey;
  position: fixed;
  height: 100%;
  top: 0px;
  width: 300px;
  left: ${(props) => (props ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @keyframes showSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  p {
    text-align: end;
    padding: 10px;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
  }
  b {
    padding: 0 10px;
  }
`;
