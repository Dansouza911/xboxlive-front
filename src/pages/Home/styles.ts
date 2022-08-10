import styled, { css } from "styled-components";

interface MenuButtonProps {
  logout?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #0f760e;
  color: #fff;
  display: grid;

  grid-auto-columns: 9rem auto;
  grid-auto-rows: 5rem 22rem auto;
  grid-template-areas:
    "header header"
    "homeContent homeContent" 
    "menu menuSidebar";

  grid-gap: 10px;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;

  .UserStatus {
    align-items: center;
    display: flex;
    img {
      width: 2rem;
      padding: 0.5rem;
    }
  }

  .userPoints {
    display: flex;
    align-items: center;

    img {
      width: 1rem;
      height: 1rem;
      margin-left: 4.4rem;
      margin-right: 0.5rem;
    }
  }

  .infoStatus {
    display: flex;
    flex-direction: row;

    Img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const HomeContent = styled.div`
  grid-area: homeContent;
 

`;

export const Menu = styled.div`
  grid-area: menu;
 
`;

export const MenuSidebar = styled.div`
  grid-area: menuSidebar;
  margin-left: 1.5rem;
  
`;

export const MenuButton = styled.button`
  display: flex;
  margin-left: 1rem;
  height: 2rem;
  width: 8rem;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: larger;
  border-radius: 10px;
  color: #fff;

  :hover {
    transform: scale(1.2);
    background-color: #cbcbcb10;
  }

  /*  ${({ logout }: MenuButtonProps) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
    `} */
`;
