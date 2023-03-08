import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import { mobile } from "../responsive";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    position: relative;
    background-color: #f5f5f5;
    @media only screen and (max-width: 767px){
        display: ${(props) =>  props.display ? "flex" : "none"};
        top: 300;
        z-index: 999;
        width: 100%;
    }
`;

const Submenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    display: ${props => props.display} ;
    transition: all 0.3s ease;
    ${mobile({ flexDirection: "column", display:"flex", position: "relative", backgroundColor: "#f5f5f5", alignItems: "flex-start"})} 
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ flexDirection: "column", width: "100%", alignItems: "flex-start"})}  
`;

const MenuItem = styled.li`
    padding: 20px;
    cursor: pointer;
    list-style: none;
`;

const MenuLink = styled(Link)`
    font-weight: 400;
    text-decoration: none;
    color: #000;
    position: relative;
    padding: 1rem 0;
    border-bottom: 2px solid #f5f5f5;
    transition: border-bottom 0.2s ease-in-out;
    &:hover{
        border-bottom: 2px solid #FF3822;
    }
`;

const Row = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MenuImg = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 70%;
    ${mobile({ display:"none"})}
`;

function NavbarMenu({display}) {
    const[menuDisplay, setMenuDisplay] = useState("none");

    const handleSubmenu = () => {
        setMenuDisplay("flex");
    }
    const handleSubmenuAgain = () => {
        setMenuDisplay("none");
    }

  return (
        <Wrapper  onMouseLeave={() => setMenuDisplay("none")} display= {display}>
            <MenuList>
                <MenuItem>
                    <MenuLink to="/"><strong>HOME</strong></MenuLink>
                </MenuItem>
                <MenuItem onMouseLeave={handleSubmenuAgain}>
                    <MenuLink to="/products/family" onMouseEnter={handleSubmenu}><strong>PRODUCTS</strong><KeyboardArrowDown style={{ transform: "translateY(-10%)", cursor: "pointer", position: "absolute", right: "(-50%)", top: "(50%)"}}/></MenuLink>
                    <Submenu display={menuDisplay}>
                            <Row>
                                <MenuItem>
                                    <MenuLink to="/products/family">Family</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/strategy">Strategy</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/party">Party</MenuLink>
                                </MenuItem>
                                <MenuImg>
                                    <Image src={require("../images/Beat That-1.png")} />
                                </MenuImg>
                            </Row>
                            <Row>
                                <MenuItem>
                                    <MenuLink to="/products/cards">Cards</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/kids">Kids</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/logic">Logic</MenuLink>
                                </MenuItem>
                                <MenuImg>
                                    <Image src={require("../images/Fluxx-2.png")} />
                                </MenuImg>
                            </Row>
                            <Row>
                                <MenuItem>
                                    <MenuLink to="/products/story">Story</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/educational">Educational</MenuLink>
                                </MenuItem>
                                <MenuItem>
                                    <MenuLink to="/products/thematic">Thematic</MenuLink>
                                </MenuItem>
                                <MenuImg>
                                    <Image src={require("../images/Dead of Winter-1.png")} />
                                </MenuImg>
                            </Row>
                    </Submenu>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/contact"><strong>CONTACT</strong></MenuLink>
                </MenuItem>
            </MenuList>
        </Wrapper>
  )
}

export default NavbarMenu