import styled from "styled-components";


export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:1fr 1fr;
 background-color:#fff;
 list-style-type:none;
 height:900px;
 grid-gap:16px;

 @media screen and (max-width:960px) {
     grid-template-columns:1fr;
     align-items:Center;
     text-align:Center;
     height:100%;
 }
 `

 export const GridItem = styled.li`
 background-color:#fff;
 height:100%;
 text-align:center;
 `
 