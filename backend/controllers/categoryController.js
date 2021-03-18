import asyncHandler from 'express-async-handler'
import Category from '../models/category.model.js'

// @desc   Fetch all categories
// @route  GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})
  res.json(categories)
})

// @desc   Fetch all categories
// @route  GET /api/categories/:id
// @access Public
const getCategoriesById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})


// @desc   Fetch all categories as one catalogue
// @route  GET /api/categories/catalogue/:id
// @access Public
const getCategoriesByCatalogue = asyncHandler(async (req, res) => {
    const category = await Category.find({catalogue: req.params.id})

    if(category) {
        res.json(category)

    }else {
        res.status(404)
        throw new Error('Category not found')
    }
})

export {getCategories,getCategoriesById,getCategoriesByCatalogue}
