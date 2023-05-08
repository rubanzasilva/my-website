import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,Img} from './navBarElements';
//import logo from '../../Images/suwikLogo.jpeg';
//import 'antd/dist/antd.css';

import { Typography } from 'antd';

const { Title } = Typography;

const Navbar = ({toggle,img,alt}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  Silver Rubanza (Silva)
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


                      

                  </NavMenu>

                  <NavBtn>
                      <NavBtnLink to="/"> Contact me </NavBtnLink>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default Navbar