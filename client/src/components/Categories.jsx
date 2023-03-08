import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile, tablet } from "../responsive";

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 60px;
   flex-wrap: wrap;
   ${tablet({ flexDirection:"column",})}
   ${mobile({ padding: "20px"})}
`

const Categories = () => {
  return <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
}
export default Categories