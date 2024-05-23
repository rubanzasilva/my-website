import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink} from './navBarElements';
import {FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
//import { Typography } from 'antd';

// const { Title } = Typography;

const Navbar = ({toggle}) => {
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
                        <SocialIconLink href="mailto:abc@rubanzasilver.com" target="_blank" arial-label="Email">
                            <FaEnvelope/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf" target='_blank'> About Silver </NavLinks>
                      </NavItem>
                      

                      <NavItem>
                          <NavLinks href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg" target='_blank'>Projects of interest</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/">My Blog</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist" target='_blank'>My Resume</NavLinks>

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