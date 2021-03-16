import React, { useEffect } from 'react'
import SlideAds from './components/SlideAds'
import { makeStyles } from '@material-ui/core'
import CategoriesHome from './components/CategoriesHome'
import TopSell from './components/TopSell'
import TrendyHome from './components/TrendyHome'
import HotDeal from './components/HotDeal'
import RoomCategories from './components/RoomCategories'
import FeedBack from './components/FeedBack'
import Addresses from './components/Addresses'
import ScrollToTop from 'components/ScrollToTop'

const usedStyles = makeStyles((theme) => ({
  root: {},
}))
const Home = () => {
  const classes = usedStyles()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.root}>
      <SlideAds />
      <CategoriesHome />
      <TrendyHome />
      <TopSell />
      <HotDeal />
      <RoomCategories />
      <FeedBack />
      <Addresses />
      <ScrollToTop />
    </div>
  )
}

export default Home
