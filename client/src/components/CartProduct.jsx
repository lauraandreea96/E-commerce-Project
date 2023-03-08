import styled from 'styled-components';
import { Add, Remove} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { deleteProduct, removeOne, addOne } from "../redux/cartRedux"
import { mobile} from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ paddingLeft: "0px"})}
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const CartProduct = ({product}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.products);
    const handleRemove = () =>{
        if(product.quantity <= 1){
            dispatch(deleteProduct({index : cart.indexOf(product), price:product.price }));
        }  
        else if(product.quantity > 1){
            dispatch(removeOne({...product, index : cart.indexOf(product)}));
        }
    };
    const handleAdd = () =>{
        dispatch(addOne({...product, index : cart.indexOf(product)}));   
    };
    
    return (
      <Container>
        <ProductDetail>
            <Image src={product.img1}/> 
            <Details>
                <ProductName><b>Product:</b>{product.title}</ProductName>
                <ProductId><b>ID:</b>{product._id}</ProductId>
            </Details>
        </ProductDetail>
        <PriceDetail>
            <ProductAmountContainer>
                <Add onClick ={handleAdd}/>
                <ProductAmount>{product.quantity}</ProductAmount>
                <Remove onClick={handleRemove}/>
            </ProductAmountContainer>
            <ProductPrice>{product.price*product.quantity}</ProductPrice>
        </PriceDetail>
          
      </Container>
    )
  }

  export default CartProduct