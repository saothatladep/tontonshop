import express from 'express'
import {
  getProducts,
  getProductsById,
  getProductsByCategory,
  getProductsRandom,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
router.route('/category/:id').get(getProductsByCategory)
router.route('/random/20').get(getProductsRandom)

export default router
