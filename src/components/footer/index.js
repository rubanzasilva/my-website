import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights} from './footerElements';
import {BackTop, Collapse} from 'antd';


const { Panel } = Collapse;

const Footer = () => {
    return (
        <FooterContainer id='footerContainer'>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper id='footerLinksWrapper'>


                 <FooterLinkItems id='footerLinkItemA'>

                     <FooterLinkTitle>About me</FooterLinkTitle>

                     <FooterLink to="/">Intrests</FooterLink>
                     <FooterLink to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>Resume</FooterLink>

                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemB'>

                     <FooterLinkTitle>My Projects Of Interest</FooterLinkTitle>
   
                     <FooterLink href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg">Antelope classifier</FooterLink>
                     <FooterLink to="/">Demand forecasting</FooterLink>
                     
                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemC'>

                     <FooterLinkTitle>My Blog</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Top posts</FooterLink>
                     <FooterLink to="/ProductCatalog">My Original thoughts </FooterLink>             

                 </FooterLinkItems>


                 <FooterLinkItems id='footerLinkItemD'>

                     <FooterLinkTitle>Contact me</FooterLinkTitle>
   
                     <FooterLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">Email</FooterLink>
                     <FooterLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">Twitter</FooterLink>
                    
                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

        

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    <p>Silver Rubanza</p> 
                    </SocialLogo>
                    <Collapse id="accordionWrapper" accordion expandIconPosition='right' style={{fontSize:"16px" , backgroundColor:"#fff" , marginBottom:"8px"}}>
                        <Panel header="Contact Me" key="1">
                            <p>rubanza@rubanzasilver.xyz</p>
                        </Panel>
                        </Collapse>
                    <WebsiteRights>Built by Me - Silva © {new Date().getFullYear()}
                      All rights reserved.</WebsiteRights>

                </SocialMediaWrap>
            </SocialMedia>

        
            

        </FooterWrap>
        <BackTop/>
            
        </FooterContainer>
    )
}

export default Footer