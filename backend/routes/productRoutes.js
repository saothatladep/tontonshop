import express from 'express'
import {
  getProducts,
  getProductsById,
  getProductsByCategory,
  getProductsRandom,
} from '../controllers/productController.js'
const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductsById)
router.route('/category/:id').get(getProductsByCategory)
router.route('/random/20').get(getProductsRandom)

export default router
