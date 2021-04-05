import React, { useEffect } from 'react'
import AboutUs from './components/AboutUs'
import ScrollToTop from 'components/ScrollToTop'
import AboutBanner from './components/AboutBanner'
import Meta from 'components/Meta'
import AboutIn from './components/AboutIn'
import ChooseUs from './components/ChooseUs'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Meta title={`TonTon | About Us`} />
      <AboutUs />
      <AboutBanner />
      <AboutIn />
      <ScrollToTop />
      <ChooseUs />
    </div>
  )
}

export default Index
