import * as Styled from "./styles";

const GamesCard = () => {
  return (
    <Styled.GamesCard>
      <div className="cards">
        <figure className="card">
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />
          <figcaption>Dota 2</figcaption>
        </figure>
      </div>
    </Styled.GamesCard>
  );
};

export default GamesCard;
