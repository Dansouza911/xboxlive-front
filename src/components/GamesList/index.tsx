import { Games } from "../../types";
import GamesCard from "../GamesCard";
import * as Styled from "./styles";

interface GamesListProps {
  list: Games[];
}

const GamesList = ({ list }: GamesListProps) => {
  return (
    <Styled.GamesListContainer>
      {list.map((element, index) => (
        <GamesCard games={element} key={element.id} />
      ))}
    </Styled.GamesListContainer>
  );
};

export default GamesList;
