import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import Promotion from '../components/Promotion'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Slider />
      <Categories />
      <Products />
      <Promotion/>
      <Footer />
    </div>
  )
}
export default Home