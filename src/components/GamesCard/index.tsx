import { Games } from "../../types";
import * as Styled from "./styles";

interface GamesCardProps {
  games: Games;
}

const GamesCard = ({ games }: GamesCardProps) => {
  return (
    <Styled.GamesCard>
      <img alt={games.title} src={games.image}></img>
      <h3>{games.title}</h3>
    </Styled.GamesCard>
  );
};

export default GamesCard;
