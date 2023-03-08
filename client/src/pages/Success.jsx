import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  ${mobile({ width:"60%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Success = () => {
  return (
    <Container>
      <MessageContainer>
          <Title>Your Order was send successfully!</Title>
          <Message>Your order will be send in 2-3 working days. Thank you for choosing us!</Message>
          <Link to="/">
            <Button >GO TO HOMEPAGE</Button>
          </Link>
      </MessageContainer>
    </Container>
  )
}
export default Success