import express from 'express'
import asyncHandler from 'express-async-handler'
import Type from '../models/type.model.js'
import Catalogue from '../models/catalogue.model.js'
import Category from '../models/category.model.js'
import Product from '../models/product.model.js'
const router = express.Router()

// @desc   Fetch all categories
// @route  GET /api/categories
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const types = await Type.find({})
    res.json(types)
  })
)

router.get(
  '/getAll',
  asyncHandler(async (req, res) => {
    const types = await Type.aggregate([
      {
        $lookup: {
          from: Catalogue.collection.name,
          localField: '_id',
          foreignField: 'type',
          as: 'listCatalogues',
        },
      },
      {
        $unwind: {
          path: '$listCatalogues',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: Category.collection.name,
          localField: 'listCatalogues._id',
          foreignField: 'catalogue',
          as: 'listCatalogues.listCategories',
        },
      },
      // {
      //   $unwind: {
      //     path: '$listCatalogues.listCategories',
      //     preserveNullAndEmptyArrays: true,
      //   },
      // },
      // {
      //   $lookup: {
      //     from: Product.collection.name,
      //     localField: 'listCatalogues.listCategories._id',
      //     foreignField: 'category',
      //     as: 'listCatalogues.listCategories.listProducts',
      //   },
      // },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          img: { $first: '$img' },
          imgDimensions: { $first: '$imgDimensions' },
          user: { $first: '$user' },
          listCatalogues: { $push: '$listCatalogues' },
        },
      },
      { $sort: { _id: 1 } },
    ])
    res.json(types)
  })
)

export default router
