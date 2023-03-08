import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { Products } from "../components/Products"
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-between;
    ${tablet({flexDirection:"column", alignItems: "center"})}
    ${mobile({padding:"20px"})}
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${tablet({flexDirection:"row", alignItems: "center"})}
    ${mobile({flexDirection:"column",})}
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${tablet({height: "70vh", width:"70%"})}
    ${mobile({width: "100%", height: "50vh"})}
`;

const ImageList = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    ${tablet({flexDirection:"column", alignItems: "center"})}
    ${mobile({flexDirection:"row"})}
`;

const ImageItem = styled.img`
    width: 90px;
    cursor: pointer;
    margin: 0 10px;
    border: 1px solid lightgray;
    ${tablet({margin:"10px 0"})}
    ${mobile({margin:"0 10px"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    ${mobile({padding:"20px 0px 0px 0px"})}
`;

const Title = styled.h1`
    font-weight: 900;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 900;
    font-size: 30px;
    color: #FF3822;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #FF3822;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    background-color: black;
    cursor: pointer;
    font-weight: 500;
    color: white;

    &:hover{
        color: black;
        background-color: white;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const {img1, img2} = product;
    const [mainImage, setMainImage] = useState(img1);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }catch(err){

            }
        };
        getProduct();
    },[id]);
    const handleClick = ()=>{
        dispatch(addProduct({...product, quantity }));   
        setQuantity(1);
    };

  return (
    <Container>
        <Nav/>
        <Wrapper>
            <ImgContainer>
                <Image src={mainImage ? mainImage : img1}/>
                <ImageList>
                    <ImageItem onClick={() => setMainImage(img1)} src={img1}></ImageItem>
                    <ImageItem onClick={() => setMainImage(img2)} src={img2}></ImageItem>
                </ImageList>
            </ImgContainer>
            <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>
                    {product.desc}
                    </Description>
                    <Price>$ {product.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick = {() => setQuantity( quantity > 1 ? quantity - 1 : quantity)}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick = {() => setQuantity(quantity + 1)}/>
                        </AmountContainer>
                        <Button onClick = {handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
        </Wrapper>
        <Products />
        <Footer/>
    </Container>
  )
}
export default Product