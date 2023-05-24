import styled from "styled-components";


export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:1fr 1fr 1fr;
 background-color:#fff;
 list-style-type:none;
//  height:900px;
//  max-height:50vh;
//  grid-gap:2px;
 border:2px solid red;

 @media screen and (max-width:960px) {
     grid-template-columns:1fr;
     align-items:Center;
     text-align:Center;
     height:100%;
 }
 `

 export const GridItem = styled.li`
 background-color:#fff;
//  height:100%;
//  width:50%;
//  margin:auto;
 text-align:center;
 border:2px solid black;
 margin:auto;
//  padding-left:30%;
//  width:100%;

@media screen and (max-width:960px) {
    //padding:8px;
    margin:8px;
}
 `




 export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 text-align:center;
 align-content:center;
 padding:100px;
 border:1px solid #000;
 background-color:#fff;
 margin:4px;


 @media screen and (max-width:780px) {
     margin:16px 0 16px 0;
     padding:32px;
 }

`