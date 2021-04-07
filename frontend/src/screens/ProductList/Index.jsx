import axios from 'axios'
import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect, useState } from 'react'
import Consult from './components/Consult'
import OtherCategories from './components/OtherCategories'
import Products from './components/Products'

const ProductList = (props) => {
  const { match, history} = props
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`/api/categories/${match.params.id}`)
      setCategories(data)
    }
    window.scrollTo(0, 0)
    fetchCategories()
  }, [match])

  return (
    <div>
      <OtherCategories catalogue={categories.catalogue} match={match} />
      {/* <Filter /> */}
      <Products match={match} history={history}/>
      <Consult />
      <ScrollToTop />
    </div>
  )
}

export default ProductList
