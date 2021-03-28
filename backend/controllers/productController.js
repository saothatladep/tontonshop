import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'

// @desc   Fetch all product
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate({
    path: 'category',
  })
  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
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
  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

// @desc   Delete a product
// @route  DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product deleted successfully' })
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

// @desc   Create a product
// @route  POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    category: req.category._id,
    user: req.user._id,
    sku: 'tonton...',
    name: 'Sample name',
    material: 'Sample material',
    color: 'Sample color',
  })

  const createProduct = await product.save()
  res.status(201).json(createProduct)
})

// @desc   Update a product
// @route  PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    category,
    user,
    sku,
    name,
    price,
    salesOff,
    priceSalesOff,
    countInStock,
    material,
    color,
    dimensions,
    images,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.category = category
    product.user = user
    product.sku = sku
    product.name = name
    product.price = price
    product.salesOff = salesOff
    product.priceSalesOff = priceSalesOff
    product.countInStock = countInStock
    product.material = material
    product.color = color
    product.dimensions = dimensions
    product.images = images

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductsById,
  getProductsByCategory,
  getProductsRandom,
  deleteProduct,
  createProduct,
  updateProduct,
}
