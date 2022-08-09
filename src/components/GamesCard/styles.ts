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

figcaption {
      
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    padding-bottom: 10px;
    font-size: 20px;
    background: none;
    color: #fff;
    transform: translateY( 100% );
    transition: .3s;

    &:after {

        content: '';
        z-index: 10;
        width: 200%;
        height: 100%;
        top: -90%;
        left: -20px;
        opacity: .1;
        transform: rotate( 45deg );
        background: linear-gradient( to top, transparent, #fff 15%, rgba( #fff, .5 ) );
        transition: .3s;
    }

    &:hover, &:focus, &:active{

        box-shadow: 0 8px 16px 3px rgba( #000, .6 );
        transform: translateY( -3px ) scale( 1.05 ) rotateX( 15deg );
        
             
        
    }
        &:after {

            transform: rotate( 25deg );
            top: -40%;
            opacity: .15;
        }
}






`






