
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux";
import { mobile} from "../responsive";

const ProductBtn = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
    ${mobile({ opacity: "1",visibility: "visible", transform: "translateY(0px)"})}
`

const Image = styled.img`
    max-height: 100%;
    transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
    &:hover ${ProductBtn}{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

const ImgContainer = styled.div`
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoContainer = styled.div`
    padding: 20px;
    position: relative;
`;

const ProductName = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
`;

const ProductPrice = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
    color: #FF3822;
    font-weight: 600;
`;

const Icon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
        background-color: #FF3822;
        color: white;
        transform: scale(1.1);
    } 
`;


const Product = ({item}) => {
    const [imgSource, setImgSource] = useState(item.img1);
    const dispatch = useDispatch();
    const handleAddToCart = ()=>{
        dispatch(addProduct({...item, quantity: 1 }));   
    };

  return (
    <Container onMouseEnter={() => setImgSource(item.img2)} onMouseLeave={() => setImgSource(item.img1)}>
        <ImgContainer>
            <Image src={imgSource} />
        </ImgContainer>
        <InfoContainer>
            <ProductBtn>
                <Icon onClick={handleAddToCart}>
                    <ShoppingCartOutlined />
                </Icon>
                <Link to={`/product/${item._id}`}>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                </Link>
            </ProductBtn>
            <ProductName>{item.title}</ProductName>
            <ProductPrice>{item.price} lei</ProductPrice>
        </InfoContainer>
    </Container>
  )
}

export default Product