import styled from "styled-components";

export const HomeContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #0F760E;
color: #fff;
display: grid;
grid-template-areas:
'header header'
'homeContent homeContent'
'menu menuSidebar';

/* grid-gap: 10px; */
`
export const Header = styled.div`
grid-area: header;
`
export const HomeContent = styled.div`
grid-area: homeContent;
`
export const Menu = styled.div`
grid-area: menu;

`
export const MenuSidebar = styled.div`
grid-area:  menuSidebar;
`