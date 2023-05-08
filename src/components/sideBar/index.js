import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBtnWrap,SideBarRoute} from './sideBarElements'
import {Button ,Typography } from "antd";
//import "antd/dist/antd.css";
import { RightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const SideBar = ({title1,title5,isOpen,toggle}) => {
    return (
        <SideBarContainer 
        // isOpen={isOpen} onClick={toggle}>
        //     <Icon onClick={toggle}>
        //         <CloseIcon/>
        //     </Icon>

        isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    {/* <SideBarLink to="/About"> */}
                    <SideBarRoute to="/">   
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>About me</Title>
                    </SideBarRoute>

                    <SideBarRoute to="/"> 
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>Projects of Interest</Title>
                    </SideBarRoute>
                    
                    {/* <SideBarLink to="/RoastedBeans"> */}
                    <SideBarRoute to="/ProductCatalog">
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>My Blog</Title>
                    </SideBarRoute>
                   

                    <SideBtnWrap>
                        <SideBarRoute to="/ContactUs">
                        <Button to="/" type="link" size="medium"  style={{color:"#008000",
                       borderRadius:"6px",minWidth:"100px",marginTop:"15px"  }}>Contact Us { <RightOutlined />} </Button>
                        </SideBarRoute>
                    </SideBtnWrap>

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar