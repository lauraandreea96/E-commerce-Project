import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import Nav from '../components/Nav';
import { mobile, tablet } from "../responsive";

const KEY = process.env.REACT_APP_STRIPE;
const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 60px;
    ${mobile({ padding: "20px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.div`
`;

const SummaryItemPrice = styled.div`
`;

const Button = styled.div`
    width: 150px;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    text-align: center;
`;

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const user = useSelector((state)=>state.user);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const onToken = (token) => {
        setStripeToken(token);
    };
    useEffect(() => {
    const makeRequest = async () => {
        try {
        const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500,
        });
        history.push("/success", {data: res.data});
        } catch {}
    };
    stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);
    const products = cart.products.map(item => {
        return {
        productId : item._id,
        quantity: item.quantity,
        img: item.img1
        }
    });
    const handleClick = async ()=>{
        try{
            const info={
            products: products,
            amount: cart.total,
            userId : user.currentUser._id,
            }
            const res = await userRequest.post("/orders", info );
        }catch(err){
        };
    };

  return (
    <Container>
        <Nav/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopTexts>
                    <TopText>Shopping Bag({cart.quantity})</TopText>
                </TopTexts>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product =>(
                        <CartProduct key={product._id} product={product} />
                    ))}
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="Boardgame Shop"
                        billingAddress
                        shippingAdress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button onClick={handleClick}>CHECKOUT NOW</Button>
                    </StripeCheckout>    
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
export default Cart