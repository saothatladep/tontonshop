import ScrollToTop from 'components/ScrollToTop'
import React, { useEffect, useState } from 'react'
import MoreInfo from './components/MoreInfo'
import Product from './components/Product'
import RateAndComment from './components/RateAndComment'
import RelatedProducts from './components/RelatedProducts'
import { listProductDetails } from 'actions/productActions.js'
import { useDispatch, useSelector } from 'react-redux'
import Loading from 'components/Loading'
import Messages from 'components/Messages'
import axios from 'axios'
const ProductDetail = (props) => {
  const { match, history } = props
  // const [product, setProduct] = useState({})
  const [status, setStatus] = useState(true)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
    // const fetchProduct = async () => {
    //   const { data } = await axios.get(`/api/products/${match.params.id}`)
    //   setProduct(data)
    // }
    // fetchProduct()
    setStatus(false)
    window.scrollTo(0, 0)
  }, [])
  
  // console.log(product)
  // console.log(status)


  return (
    <div>
      {status ? (
        <Loading />
      ) : (
        <Product product={product} match={match} history={history} />
      )}
      <MoreInfo />
      <RateAndComment />
      <RelatedProducts />
      <ScrollToTop />
    </div>
  )
}

export default ProductDetail
