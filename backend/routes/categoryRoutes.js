import express from 'express'
import asyncHandler from 'express-async-handler'
import Category from '../models/category.model.js'

const router = express.Router()

// @desc   Fetch all categories
// @route  GET /api/categories
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
}))


// @desc   Fetch all categories
// @route  GET /api/categories/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)

    if(category) {
        res.json(category)

    }else {
        res.status(404)
        throw new Error('Category not found')
    }
}))

// @desc   Fetch all categories as one catalogue
// @route  GET /api/categories/catalogue/:id
// @access Public
router.get('/catalogue/:id', asyncHandler(async (req, res) => {
    const category = await Category.find({catalogue: req.params.id})

    if(category) {
        res.json(category)

    }else {
        res.status(404)
        throw new Error('Category not found')
    }
}))



export default router