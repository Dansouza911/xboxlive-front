import styled, { css } from "styled-components";

interface MenuButtonProps {
  logout?: boolean;
  active?: boolean;
}
export const MenuContainer = styled.div`
 height: 100vh;
  `;

export const MenuButton = styled.button<MenuButtonProps>`
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
    transform: scale(1.3);
    transition: .4s;
    background-color: #cbcbcb30;
    color: #000;
  }

   ${({ logout }) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
      background-color: #ff000065;
    `}

    ${({ active}) => active && css`
    background-color: #cbcbcb30;`} 
`;
