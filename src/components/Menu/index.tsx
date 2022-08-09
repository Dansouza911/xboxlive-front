import * as Styled from "./styles";

interface MenuProps {
  path: "favorites" | "myGames" | "editUser";
}

export const Menu = ({ path }: MenuProps) => {
  return (
    <Styled.MenuContainer>
      <Styled.MenuButton active={path === "favorites"}>
        <p>Favoritos</p>
      </Styled.MenuButton>
      <Styled.MenuButton active={path === "myGames"}>
        <p>Meus Jogos</p>
      </Styled.MenuButton>
      <Styled.MenuButton>
        <p>Editar jogo</p>
      </Styled.MenuButton>
      <Styled.MenuButton active={path === "editUser"}>
        <p>Editar Usuário</p>
      </Styled.MenuButton>
      <Styled.MenuButton logout >
        <p>Sair</p>
      </Styled.MenuButton>
    </Styled.MenuContainer>
  );
};
