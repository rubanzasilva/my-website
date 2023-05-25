import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,Img,SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './navBarElements';
//import logo from '../../Images/suwikLogo.jpeg';
//import 'antd/dist/antd.css';
import {FaWhatsapp,FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

import { Typography } from 'antd';

const { Title } = Typography;

const Navbar = ({toggle,img,alt}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/silver-rubanza/" target="_blank" arial-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/rubanzasilva/" target="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">
                            <FaEnvelope/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
                      {/* <Img src={logo} alt={alt}/> */}
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/"> About Silver </NavLinks>
                          {/* <NavLinks to="/ContactUs">About Zicofe</NavLinks> */}
                      </NavItem>
                      

                      <NavItem>

                          {/* <NavLinks to="/cafe">Zicofe Cafe</NavLinks> */}
                          <NavLinks to="/">Projects of interest</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/">My Blog</NavLinks>
                          {/* <NavLinks to="/shop">Shop</NavLinks> */}
                      </NavItem>

                      <NavItem>
                          <NavLinks to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>My Resume</NavLinks>
                          {/* <NavLinks to="/shop">Shop</NavLinks> */}
                      </NavItem>

                      


                      

                  </NavMenu>

                  <NavBtn>
                      {/* <NavBtnLink to="/"> Contact me </NavBtnLink> */}
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default Navbar