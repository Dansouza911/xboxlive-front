import styled from "styled-components";


export const GamesCard = styled.div `
width: 100%;
display: flex;
flex-wrap: nowrap;
.cards {
    flex-flow: row wrap
}

.card {
    margin: 20px;
    width: 180px;
    height: 270px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba( #000, .8 );
    transform-origin: center top;
    transform-style: preserve-3d;
    transform: translateZ( 0 );
    transition: .3s;

}
       
img {

    width: 100%;
    min-height: 100%;
}









`






