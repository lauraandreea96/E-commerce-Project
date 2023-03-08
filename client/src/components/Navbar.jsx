import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';
import { logOut } from "../redux/userSlice";
import { deleteAll } from "../redux/cartRedux";
import { useDispatch, useSelector  } from "react-redux";

const Container = styled.div`
    margin: 20px 0;
`;

const Wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ flexDirection:"column"})}
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: 900;
`;

const Right = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ marginTop:"10px"})}
`;

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    const { quantity }= useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const handleLogOut = ()=>{
        dispatch(logOut());
        dispatch(deleteAll());

    };
    const {currentUser} = useSelector((state) => state.user);

  return (
    <Container>
        <Wrapper>
            <Left>
            <Link to="/" style={{color:"black", textDecoration:"none"}}><Logo>BoardPlay</Logo></Link>             
            </Left>
            <Right>
                <Link style={{color:"black", textDecoration:"none", display: currentUser ? "none" : "block"}} to="/register"><MenuItem>REGISTER</MenuItem></Link>
                <Link style={{color:"black", textDecoration:"none",  display: currentUser ? "none" : "block"}} to="/login"> <MenuItem>SIGN IN</MenuItem> </Link>
                <Link style={{color:"black", textDecoration:"none", display: currentUser ? "block" : "none"}} to="/" onClick={handleLogOut}> <MenuItem>LOG OUT</MenuItem> </Link>
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}
export default Navbar
