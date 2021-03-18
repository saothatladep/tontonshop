import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'

// @desc   Fetch all product
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate({
    path: 'category',
  })
  res.json(products)
})

// @desc   Fetch product by id
// @route  GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate({
    path: 'category',
  })

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc   Fetch all products by category
// @route  GET /api/products/categories/:id
// @access Public
const getProductsByCategory = asyncHandler(async (req, res) => {
  const product = await Product.find({ category: req.params.id }).populate({
    path: 'category',
  })

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc   Fetch all products by category
// @route  GET /api/products/radom/20
// @access Public
const getProductsRandom = asyncHandler(async (req, res) => {
  const products = await Product.aggregate([{ $sample: { size: 20 } }])
  res.json(products)
})

export {
  getProducts,
  getProductsById,
  getProductsByCategory,
  getProductsRandom,
}
