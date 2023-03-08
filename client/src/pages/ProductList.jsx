import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Footer } from "../components/Footer"
import { Products } from "../components/Products"
import Nav from "../components/Nav"
import { mobile} from "../responsive";

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px;
    ${mobile({ padding: "20px", flexDirection: "column"})}
`;

const Filter = styled.div`
    margin: 20px;
    display: flex;
    ${mobile({ flexDirection: "column", margin:"0"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ fontSize: "16px", marginBottom: "10px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" , marginBottom: "20px"})}
`;

const Option = styled.option` 
`;

const ProductList = () => {
    const location = useLocation();
    const[filters, setFilters] = useState({});
    const[sort, setSort] = useState("newest");
    const [cat, setCat] = useState(location.pathname.split("/")[2]);
    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value,
        });
        console.log(filters);

        if(e.target.name === "categories"){
            setCat(e.target.value);
            console.log(cat);
        }
    };
    useEffect(()=>{
        setCat(location.pathname.split("/")[2]);
        setFilters({
            ...filters,
            categories : location.pathname.split("/")[2],
        });
    },[location]);

  return (
    <Container>
        <Nav/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="categories" value={cat} onChange={handleFilters} >
                <Option disabled>Category</Option>
                <Option>family</Option>
                <Option>strategy</Option>
                <Option>party</Option>
                <Option>cards</Option>
                <Option>kids</Option>
                <Option>logic</Option>
                <Option>fantasy</Option>
                <Option>educational</Option>
                <Option>thematic</Option>
                </Select>
                <Select name="players" onChange={handleFilters}>
                <Option disabled>Num of Players</Option>
                <Option>All</Option>
                <Option>1</Option>
                <Option>2</Option>
                <Option>2-4</Option>
                <Option>4-6</Option>
                <Option>6-8</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </Container>
  )
}
export default ProductList;