import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'
import Category from '../models/category.model.js'
const router = express.Router()

// @desc   Fetch all product
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find().populate({
      path: 'category',
    })
    res.json(products)
  })
)

// @desc   Fetch product by id
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
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
)

// @desc   Fetch all products as one category
// @route  GET /api/products/categories/:id
// @access Public
router.get(
  '/category/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.find({ category: req.params.id })

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
