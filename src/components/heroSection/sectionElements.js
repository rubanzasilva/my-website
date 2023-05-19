import styled from "styled-components";
import {Link} from 'react-router-dom';

export const GridWrapper = styled.ul`
 display:grid;
 grid-template-columns:2fr 1fr;
 width: 80%;
 ${'' /* background-color:#ffffff; */}
 background-color: #00a886;
 list-style-type:none;
 margin:56px;
 ${'' /* padding:8px 0px 8px 56px; */}
 height:auto;
 
 
@media screen and (max-width:960px) {
    grid-template-columns:1fr;
    align-items:Center;
    text-align:Center;
    margin:16px;
}
`


export const GridItem = styled.li`
${'' /* background-color:#f8f9fa; */}
background-color:#ffffff;
text-align:center;

& .InfoSectionTextWrap{

    @media screen and (max-width:960px) {
    }
}

& .InfoSectionImageWrap{
    @media screen and (max-width:960px) {
    }
}



`

export const SectionText = styled.div`
    margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 text-align:justify;
 align-content:center;
 padding:16px;


 @media screen and (max-width:780px) {

 }

`

//column 2
export const ImgWrap = styled.div`
    margin:auto;
 display:flex; 
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-around;
 align-items:center;
 text-align:center;


 @media screen and (max-width: 968px) {
    }
`

//removing the width causes element to go wild
export const Img = styled.img`
    margin:auto;
   width:80%;
   height:80%;
   height:auto;
   object-fit:scale-down;
   left:0;
 display:flex; 
 flex-wrap:wrap;

 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;
     margin-top:auto;

 }
`

export const BtnWrap = styled.div`
    margin:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    
    @media screen and (max-width: 768px) {
        flex-basis:100%;
    }
`

export const SocialMedia = styled.section`
 max-width:1000px;
 width:100%;
`
export const SocialMediaWrap = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 max-width:1100px;
 margin: 40px auto 0 auto;

 @media screen and (max-width:820px) {
     flex-direction:column;
 }
`
export const SocialLogo = styled(Link)`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 justify-self:start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 ${'' /* margin-top:16px; */}
 font-weight:bold;
 `
export const WebsiteRights = styled.small`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 ${'' /* margin-bottom:16px; */}
 font-weight:600;

`
export const SocialIcons = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:240px;
`
export const SocialIconLink = styled.a`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 font-size:24px;
`