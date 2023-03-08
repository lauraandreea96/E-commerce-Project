import React, { useState } from 'react'
import Navbar from './Navbar';
import NavbarMenu from './NavbarMenu';
import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Container = styled.span`
    margin: 20px 0;
    position: relative;
`;

const OpenMenu = styled.span`
    position: absolute;
    right: 2rem;
    top: 1rem;
    display: none;
    @media only screen and (max-width: 767px){
        display: ${(props) =>  props.display ? "none" : "block"};
    }
`;

const CloseMenu = styled.span`
    position: absolute;
    right: 2rem;
    top: 1rem;
    display: none;
    @media only screen and (max-width: 767px){
        display: ${(props) => props.display ? "block" : "none"};
    }
`;

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = ()=>{
        setMenuOpen(!menuOpen);
    }

  return (
    <Container>
        <OpenMenu onClick={handleMenu} display = {menuOpen}>
            <MenuOutlinedIcon onClick={()=>setMenuOpen("true")}/>
        </OpenMenu>
        <CloseMenu onClick={handleMenu} display = {menuOpen}>
            <CloseOutlinedIcon/>
        </CloseMenu>
        <Navbar />  
        <NavbarMenu display={menuOpen}/>
    </Container>
  )
}

export default Nav