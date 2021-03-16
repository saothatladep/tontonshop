import React, { useState, useEffect } from 'react'
import Consult from './components/Consult'
import Filter from './components/Filter'
import OtherCategories from './components/OtherCategories'
import Products from './components/Products'
import axios from 'axios'
import ScrollToTop from 'components/ScrollToTop'

const ProductList = (props) => {
  const { match } = props
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`/api/categories/${match.params.id}`)
      setCategories(data)
    }
    window.scrollTo(0, 0)
    fetchCategories()
  }, [match])
  console.log(categories)

  return (
    <div>
      <OtherCategories catalogue={categories.catalogue} match={match} />
      <Filter />
      <Products match={match} />
      <Consult />
      <ScrollToTop />
    </div>
  )
}

export default ProductList
