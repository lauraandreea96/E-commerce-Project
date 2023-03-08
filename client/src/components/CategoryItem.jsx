import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    display: flex;
    min-width: 200px;
    justify-content: space-around;
    background-color: #f5f5f5;
    margin: 0 30px;
    padding: 10px 20px;
    ${tablet({ margin: "0px 0px 20px 0px",})}
    ${mobile({ margin: "0px 0px 10px 0px",})}
`;

const Image = styled.img`
    width: 50%;
    object-fit: cover;
    ${tablet({ width: "40%" })}
    ${mobile({ width: "30%" })}
`;

const Info= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Title= styled.h1`
    color: black;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 900;
`;

    const Button= styled.button`
        border: none;
        padding: 10px 30px;
        font-size: 16px;
        background-color: black;
        color: white;
        cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}> 
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
            <Image src={item.img}/>
        
    </Container>
  )
}
export default CategoryItem