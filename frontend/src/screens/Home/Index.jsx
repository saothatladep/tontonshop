import React from 'react'
import SlideAds from './components/SlideAds'
import { makeStyles } from '@material-ui/core'
import CategoriesHome from './components/CategoriesHome'
import TopSell from './components/TopSell'
import TrendyHome from './components/TrendyHome'
import HotDeal from './components/HotDeal'
import RoomCategories from './components/RoomCategories'
import FeedBack from './components/FeedBack'
import Addresses from './components/Addresses'

const usedStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 10,
  },
}))
const Home = () => {
  const classes = usedStyles()

  return (
    <div className={classes.root}>
      <SlideAds />
      <CategoriesHome />
      <TrendyHome/>
      <TopSell />
      <HotDeal/>
      <RoomCategories/>
      <FeedBack/>
      <Addresses/>
    </div>
  )
}

export default Home
