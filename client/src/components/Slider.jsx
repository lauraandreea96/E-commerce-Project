import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import {React, useState }from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile, tablet } from "../responsive";

const Container = styled.div`
    width:  100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${tablet({ height: "90vh"})}
    ${mobile({ flexDirection: "column", alignItems: "flex-start", height: "100%", marginBottom: "30px"})}
`;

const Wrapper = styled.div`
    height: 100%; 
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100%;
    background-color: #${props => props.bg};
    ${mobile({ flexDirection: "column", alignItems: "flex-start",})}
`;

const ImgContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 60px;
    ${mobile({ width:"80%", padding: "0px 20px", order: "1"})}
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
    ${mobile({ width:"90%", padding: "0px 20px", order: "2"})}
`;

const Category = styled.h3`
    font-size: 30px;
    font-weight: 900;
    ${mobile({ fontSize: "18px"})}
`

const Title = styled.h1`
    font-size: 70px;
    font-weight: 900;
    margin: 50px 0px;
    ${tablet({ fontSize: "50px", margin: "20px 0px"})}
    ${mobile({ fontSize: "30px", margin: "20px 0px"})}
`

const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    line-height: 1.4;
    ${mobile({ display: "none"})}
    
`

const Button = styled.button`
    padding: 10px 30px;
    font-size: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top: 30px;
    ${mobile({ marginTop: "15px"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0)

    const HandleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => HandleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item =>(
                <Slide bg={item.bg} key={item.id}>
                    <InfoContainer>
                        <Category>{item.cat}</Category>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => HandleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
export default Slider;
