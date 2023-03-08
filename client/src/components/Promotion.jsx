import React from 'react'
import styled from 'styled-components';
import { mobile, tablet } from "../responsive";

const Container = styled.div`
     padding: 60px;
     background-color: #f5f5f5;
     display: flex;
     ${mobile({flexDirection:"column", padding: "20px"})}
`

const ImgContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 60px;
    ${tablet({paddingRight: "20px",})}
    ${mobile({paddingRight: "0px", width: "100%"})}
`;

const Image = styled.img`
    width: 100%;
`

const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    align-items: flex-start;
    ${tablet({paddingLeft: "20px",})}
    ${mobile({paddingLeft: "0px", width: "100%"})}
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 900;
    margin: 50px 0px;
    ${tablet({fontSize: "50px",})}
    ${mobile({fontSize: "30px",})}
`

const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    line-height: 1.4;
`

const Button = styled.button`
    padding: 10px 30px;
    font-size: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top: 30px;
`   

function Promotion() {
  return (
    <Container>
        <ImgContainer>
            <Image src={require("../images/Fluxx-2.png")} />
        </ImgContainer>
        <InfoContainer>
            <Title>Adventure Time Fluxx</Title>
            <Desc>Adventure Time Fluxx, as with all Fluxx card games, starts with one basic rule: Draw one card, Play one card. You start with a hand of three cards, so add the card you drew to your hand, and then choose one card to play, following the directions written on your chosen card.</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}
export default Promotion