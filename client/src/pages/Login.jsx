import styled from "styled-components"
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
`;

const FlexContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background:  linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/K079xvD/background-02.jpg")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 20%;
    background-color: white;
    ${tablet({ width:"40%"})}
    ${mobile({ width:"60%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &::disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFatching, error} = useSelector((state) => state.user);

    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});
    };

  return (
    <Container>
        <Navbar />
        <FlexContainer>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFatching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link to="/register" style={{color:"black", margin: "5px 0px", fontSize: "12px"}}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </FlexContainer>
    </Container>
  )
}
export default Login;