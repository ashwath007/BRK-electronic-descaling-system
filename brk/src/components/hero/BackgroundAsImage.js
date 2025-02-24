import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Row, Col, Alert } from 'react-bootstrap'
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import POne from './pamphlet_one.jpeg'
import PTwo from './pamphlet_two.jpeg'
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom"
const StyledHeader = styled(Header)
`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
//TODO here we need to change Backgronud image
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1529045138962-5f59528258fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-10`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-green-700 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-200 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;
//https://player.vimeo.com/video/562188433?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
export default () => {

  const [insideProducts, setinsideProducts] = useState(false);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">
        About
      </NavLink>
      <NavLink href="/how">
        How it works?
      </NavLink>
      <NavLink href="#">
        Why us?
      </NavLink>
      <NavLink href="/contacts">
        Contacts
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/agriculture">
        Join Us
      </PrimaryLink>
    </NavLinks>
  ];


  const showProduct = () => {
    if(insideProducts){
      return(
        <div style={{backgroundColor:'white',alignSelf:'center'}} className="text-center">
          <div>
          <Row>
      <Col>
      <Card.Body variant='success'>
      <Card.Title>Agriculture</Card.Title>
  
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link onClick={() => {}}>Read more</Card.Link>
  </Card.Body>
      </Col>  
      <Col>
      <Card.Body variant='warning'>
          <Card.Title>Domestic</Card.Title>
      
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Read more</Card.Link>
  </Card.Body>
      </Col>
      <Col>
      <Card.Body variant='danger'>
          <Card.Title>Industry</Card.Title>
      
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Read more</Card.Link>
  </Card.Body>
      </Col>
    </Row>
            </div>
            {/* <div style={{backgroundColor:'#fff'}}>

            <MediaQuery minWidth={400} maxWidth={1200}>
      <AwesomeSlider style={{width:'500'}}>

    <div><img src={POne} style={{height:300,width:200}}/></div>
    <div><img src={PTwo} style={{height:300,width:200}}/></div>
    </AwesomeSlider>
    </MediaQuery>
    <MediaQuery minWidth={200} maxWidth={400}>
      <AwesomeSlider style={{width:'500'}}>

    <div><img src={POne} style={{height:270,width:200}}/></div>
    <div><img src={PTwo} style={{height:270,width:200}}/></div>
    </AwesomeSlider>
    </MediaQuery>
      <MediaQuery minWidth={1200}>
      <AwesomeSlider>

      <div><img src={POne} style={{height:900,width:700}}/></div>
    <div><img src={PTwo} style={{height:900,width:700}}/></div>
  </AwesomeSlider>

    </MediaQuery>

            </div> */}
          </div>
      )
    }
  
  }
const showProductStatus = () => {
    const temp = insideProducts; 
    setinsideProducts(!temp)
}
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Proud Indian Product 🇮🇳</Notification>
            <Heading>
              <span>BRK SYSTEMS</span>
              <br />
              <SlantedBackground>STRUCTURE WATER DEVICE</SlantedBackground>
            </Heading>
            <Link to="/agriculture">
            <PrimaryAction>Our Product</PrimaryAction>
            </Link>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
            //TODO We need to change the video
              // url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=1&responsive=1"
              url="//player.vimeo.com/video/562188433?title=0?&muted=1&portrait=0&byline=0&autoplay=1&responsive=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              background="transparent"
              
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
      {showProduct()}

    </Container>
  );
};