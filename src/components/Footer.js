
import React from "react";
import './footer.css';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                textAlign: "center",
                letterSpacing: "30px",
                marginTop: "0px",
                marginBottom: "30px",
                // boxShadow:"0px 8px 22px blue"
            }}>
                <SocialMediaIconsReact className="element" style={{ marginLeft: "10px" }} borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" boxShadow="0px 8px 22px blue" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(13,34,42,1)" iconSize="5" roundness="50%"  url="https://twitter.com/supersportinfo?lang=en" size="58" />

                <SocialMediaIconsReact style={{ marginLeft: "10px" }} borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(13,34,42,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/aakk2327/" size="58" />


                <SocialMediaIconsReact style={{ marginLeft: "10px" }} borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(13,34,42,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/sports.car.world/" size="58" />


                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="pinterest" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(13,34,42,1)" iconSize="5" roundness="50%" url="https://www.pinterest.com/dlalder/supercars/" size="58" />


                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(13,34,42,1)" iconSize="5" roundness="50%" url="https://in.linkedin.com/company/v8-supercars" size="58" />
            </h1>
            <h5 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-10px",
                color: "white"
            }}>© 2022 SuperCars AUTOMOBILES S.A.S.</h5>
            <Container>
                <Row>
                    <Column>
                        <Heading>  <FooterLink href="#">CONTECT US</FooterLink></Heading>
                        {/* <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>  <FooterLink href="#">CAREER</FooterLink></Heading>
                        {/* <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>  <FooterLink href="#">MEDIA</FooterLink></Heading>
                        {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>  <FooterLink href="#">LEGAL NOTICE</FooterLink></Heading>
                        {/* <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink> */}
                    </Column>

                    <Column>
                        <Heading>  <FooterLink href="#">CODE OF CONDUCT</FooterLink></Heading>
                 </Column>
                
                 <Column>
                        <Heading>  <FooterLink href="#">COOKIES SETTINGS</FooterLink></Heading>
                 </Column>
                
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;