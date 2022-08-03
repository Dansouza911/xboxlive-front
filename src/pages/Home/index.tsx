import { DateTime } from "luxon";
import * as Styled from "./styles";

const Home = () => {
  const date = DateTime.now().toLocaleString({ ...DateTime.TIME_SIMPLE });

  return (
    <Styled.HomeContainer>
      <Styled.Header>
        <header>
          <img alt="userPicture" />
          <p>userName</p>
          <p>userPoints</p>
          <img alt="userMic" />
          <img alt="userBattery" />
          <p>{date}</p>
        </header>
      </Styled.Header>
      <Styled.HomeContent>
        <img alt="game1" />
        <img alt="game2" />
        <img alt="game3" />
        <img alt="game4" />
      </Styled.HomeContent>
      <Styled.Menu>
        <p>Favoritos</p>
        <p>Meus Jogos</p>
        <p>Editar jogo</p>
        <p>Editar Usuário</p>
        <p>Sair</p>
      </Styled.Menu>
      <Styled.MenuSidebar>
      <p>Favoritos</p>
      </Styled.MenuSidebar>
    </Styled.HomeContainer>
  );
};

export default Home;
