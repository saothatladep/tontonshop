import React from 'react'
import SlideAds from './components/SlideAds'
import { makeStyles } from '@material-ui/core'
import CategoriesHome from './components/CategoriesHome'
import TopSell from './components/TopSell'

const usedStyles = makeStyles((theme) => ({
  root: {
    marginTop: 154,
  },
}))
const Home = () => {
  const classes = usedStyles()

  return (
    <div className={classes.root}>
      <SlideAds />
      <CategoriesHome />
      <TopSell />
    </div>
  )
}

export default Home
