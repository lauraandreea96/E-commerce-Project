import { useState, useEffect } from "react";
import styled from "styled-components"
import Product from "./Product"
import axios from "axios";
import { mobile} from "../responsive";

const Container = styled.div`  
    padding: 60px;
    text-align: center;
    ${mobile({ padding: "20px"})}
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-gap: 1rem;
    margin: auto; 
`;

const Title = styled.h1`
  font-size: 40px;
`

export const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){
      };
    };
    getProducts();
  },[cat])

  useEffect(() => {
    cat &&
      setFilteredProducts(
       Object.values(filters).includes("All") ? products : products.filter((item) =>
       Object.entries(filters).every(([key, value]) =>
         item[key].includes(value)
       ))
      );
  }, [products, cat, filters]);
  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts(prev => [...prev].sort((a,b)=> -a.createdAt.localeCompare(b.createdAt)));
    } else if(sort === "asc"){
      setFilteredProducts(prev => [...prev].sort((a,b)=> a.price - b.price));
    } else{
      setFilteredProducts(prev => [...prev].sort((a,b)=> b.price - a.price));
    }
  },[sort]);

  return (
    <Container>
      <Title>Newest Products</Title>
      <ProductsContainer>
          {cat ? filteredProducts.map(item =>(
              <Product item={item} key={item._id}/>
          )) : products.slice(0,8).map(item =>(
            <Product item={item} key={item._id}/>
        ))}
        </ProductsContainer>
    </Container>
  )
}