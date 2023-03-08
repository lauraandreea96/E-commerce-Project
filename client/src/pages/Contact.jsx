import React from 'react'
import styled from "styled-components"
import { Footer } from '../components/Footer';
import Nav from '../components/Nav';
import { mobile, tablet } from "../responsive";

const Container = styled.div`
`;

const ContactContainer = styled.div`
     padding: 60px;
     display: flex;
     ${mobile({flexDirection:"column", padding: "20px"})}
`;

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 40px;
    ${tablet({paddingRight: "20px",})}
    ${mobile({paddingRight: "0px", width: "100%"})}
`;

const FormContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    align-items: flex-start;
    ${tablet({paddingLeft: "20px",})}
    ${mobile({paddingLeft: "0px", width: "100%"})}
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 30px;
    ${tablet({fontSize: "50px",})}
    ${mobile({fontSize: "30px",})}
`;

const Image = styled.img`
    width: 80%;
    ${tablet({width: "100%",})}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

const Input = styled.input`
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
`;

const TextArea = styled.textarea`
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Contact = () => {
  return (
    <Container>
        <Nav/>
        <ContactContainer>
            <ImageContainer>
                <Image src={require("../images/Fluxx-2.png")} />
            </ImageContainer>
            <FormContainer>
                <Title>Contact Us</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="email" />
                    <Input placeholder="phone" />
                    <TextArea placeholder="message"/>
                    <Button >SEND</Button>
                </Form>
            </FormContainer>
        </ContactContainer>
        <Footer/>
    </Container>
  )
}
export default Contact