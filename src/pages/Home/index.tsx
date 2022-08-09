import { DateTime } from "luxon";
import * as Styled from "./styles";
import back from "../../assets/images/back.png";
import iconUser from "../../assets/images/iconUser.png";
import userMic from "../../assets/images/mute.png";
import userBattery from "../../assets/images/battery.png";
import userPoints from "../../assets/images/gPoints.png";
import { Menu } from "../../components/Menu";
import GamesList from "../../components/GamesList";
import GamesCard from "../../components/GamesCard";

const Home = () => {
  const date = DateTime.now().toLocaleString({ ...DateTime.TIME_SIMPLE });

  return (
    <Styled.HomeContainer>
      <Styled.Header>
        <div>
          <div className="UserStatus">
            <img alt="backPage" src={back} />
            <img alt="userPicture" src={iconUser} />
            <p>ForPlayBR</p>
          </div>
          <div className="userPoints">
            <img alt="userPoints" src={userPoints} />
            <p>76982</p>
          </div>
        </div>
        <div className="infoStatus">
          <div>
            <img alt="userMic" src={userMic} />
            <img alt="userBattery" src={userBattery} />
          </div>
          <p>{date}</p>
        </div>
      </Styled.Header>
      <Styled.HomeContent>
        <div className="list">
          <GamesCard />
          <img alt="game1" />
          <img alt="game2" />
          <img alt="game3" />
          <img alt="game4" />
        </div>
      </Styled.HomeContent>
      <Styled.Menu>
        <Menu path="favorites" />
      </Styled.Menu>
      <Styled.MenuSidebar>
        <p>Favoritos</p>
      </Styled.MenuSidebar>
    </Styled.HomeContainer>
  );
};

export default Home;
