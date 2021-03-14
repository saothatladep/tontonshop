import React, { useState, useEffect } from 'react'
import Consult from './components/Consult'
import Filter from './components/Filter'
import OtherCategories from './components/OtherCategories'
import Products from './components/Products'
import axios from 'axios'

const ProductList = (props) => {
  const { match } = props
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(`/api/categories/${match.params.id}`)
      setCategories(data)
    }
    fetchCategories()
  }, [match])
  console.log(categories.catalogue)

  return (
    <div>
      <OtherCategories catalogue={categories.catalogue} match={match} />
      <Filter />
      <Products match={match} />
      <Consult />
    </div>
  )
}

export default ProductList
