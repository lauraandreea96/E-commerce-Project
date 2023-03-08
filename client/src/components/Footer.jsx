import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container= styled.div`
  display: flex;
  background-color: #f5f5f5;
  ${mobile({ flexDirection:"column",})}
`
const Left= styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
`

const Description = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center= styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right= styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BoardPlay.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </Description>
      </Left>
      <Center>
        <Title>Categories</Title>
        <List>
          <ListItem>Family</ListItem>
          <ListItem>Strategy</ListItem>
          <ListItem>Party</ListItem>
          <ListItem>Cards</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem>Logic</ListItem>
          <ListItem>Fantasy</ListItem>
          <ListItem>Educational</ListItem>
          <ListItem>Thematic</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}} /> Str. Izvor, Iasi, Romania
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}} /> +4 0741 234 567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@boardplay.com
        </ContactItem>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  )
}
