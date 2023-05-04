import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights,Img, LocationOnMap} from './footerElements';
//import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaTiktok} from 'react-icons/fa';
import {BackTop, Collapse} from 'antd';
//import 'antd/dist/antd.css';
//import { Button } from 'antd';
//import logo from '../../Images/suwikLogo.jpeg';
// import GoogleMaps from '../Map';

// const location = {
//     address: 'Zigoti Coffee Works Ltd',
//     lat: 0.31952388690630096,
//     lng: 32.612368559943604,
//   } // our location object from earlier


const { Panel } = Collapse;

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About me</FooterLinkTitle>
   
                     <FooterLink to="/">Intrests</FooterLink>
                     <FooterLink to="/">C.V.</FooterLink>
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>My Projects Of Interest</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Antelope classifier</FooterLink>
                     <FooterLink to="/ProductCatalog">Demand forecasting</FooterLink>
                     {/* <FooterLink to="/GreenBeans">Black beans</FooterLink> */}
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>My Blog</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Top posts</FooterLink>
                     <FooterLink to="/ProductCatalog">My Original thoughts </FooterLink>
                     {/* <Link> <a href='http://www.zicofecafe.com'>ZICOFE Cafe</a></Link> */}
                     

                 </FooterLinkItems>


                 <FooterLinkItems>

                     <FooterLinkTitle>Contact me</FooterLinkTitle>
   
                     <FooterLink to="/ContactUs">Email</FooterLink>
                     <FooterLink to="/ContactUs">twitter</FooterLink>
                    
                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

            {/* <LocationOnMap>
            <GoogleMaps location={location} zoomLevel={17} />
            </LocationOnMap> */}

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    <p>SR</p> 
                    {/* <Img src={logo} alt='SUWIK INVESTMENTS'/> */}
                    </SocialLogo>
                    <Collapse id="accordionWrapper" accordion expandIconPosition='right' style={{fontSize:"16px" , backgroundColor:"#fff" , marginBottom:"8px"}}>
                        <Panel header="Contact Me" key="1">
                            <p>rubanza@rubanzasilver.xyz</p>
                        </Panel>
                        </Collapse>
                    {/* <WebsiteRights>wilson@suwik.xyz</WebsiteRights> */}
                    <WebsiteRights>Built by Me - Silva © {new Date().getFullYear()}
                      All rights reserved.</WebsiteRights>
                    {/* <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/ZigotiCoffee" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/zigoticoffeeofficial/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/ZicofeOfficial" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.tiktok.com/@zigoticoffee" target="_blank" arial-label="Tiktok">
                            <FaTiktok/>
                        </SocialIconLink>
                        <SocialIconLink href="https://wa.me/message/FTZ2CS3TCD4HC1" target="_blank" aria-label="Whatsapp">
                            <FaWhatsapp/>
                        </SocialIconLink>
                    </SocialIcons> */}
                    
                </SocialMediaWrap>
            </SocialMedia>

        
            

        </FooterWrap>
        <BackTop/>
            
        </FooterContainer>
    )
}

export default Footer