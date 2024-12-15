import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import TrendingProducts from '../shop/TrendingProducts'
import PromoBanner from './PromoBanner'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <TrendingProducts/>
    <PromoBanner/>
    </>
  )
}

export default Home