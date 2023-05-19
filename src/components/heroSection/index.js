import React, {useState} from 'react';
import { GridWrapper,GridItem , SectionText,ImgWrap,Img, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './sectionElements';
import {Typography } from "antd";
import {FaWhatsapp,FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

const { Title , Text } = Typography;

const HeroSection = ({title,headline,description,text,text1,img,alt,TitleText}) => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <GridWrapper >

    
        <GridItem >
        <SectionText className='InfoSectionTextWrap'>
                    
        <Title level={3} style={{fontSize:"1.75em",color:"#35241A",lineHeight:"1.10722",fontWeight:"400",letterSpacing:"-.005em",marginTop:"6px",marginBottom:"15px",fontFamily:"Lato"}}> {TitleText} </Title>
        <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/silver-rubanza/" target="_blank" arial-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">
                            <FaEnvelope/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/rubanzasilva/" target="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
                     
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginTop:"6px",marginBottom:"15px",fontFamily:"Roboto"}}>{headline}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text}</Text>
                     <Text  style={{color:"#35241A", fontSize:"16px",lineHeight:"1.381",fontWeight:"200",letterSpacing:".016em",marginBottom:"15px",fontFamily:"Roboto"}}>{text1}</Text>
                   
                 </SectionText>
        
        </GridItem>
        


        <GridItem>

        <ImgWrap className='InfoSectionImageWrap'>
                         <Img src={img} alt={alt}/>
                     </ImgWrap>
        </GridItem>
        
        
        </GridWrapper>

    
    )
}

export default HeroSection;