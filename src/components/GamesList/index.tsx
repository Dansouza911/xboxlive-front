import { Games } from "../../types";
import * as Styled from "./styles";

interface GamesListProps {
  list: Games[];
}

const GamesList = ({ list }: GamesListProps) => {
  return (
    <Styled.GamesListContainer>
      {list.map((Element, index) => (
        <div key={index}>Card</div>
      ))}
    </Styled.GamesListContainer>
  );
};

export default GamesList;
