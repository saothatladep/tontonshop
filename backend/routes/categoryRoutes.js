import express from 'express'
import {
  getCategories,
  getCategoriesByCatalogue,
  getCategoriesById,
} from '../controllers/categoryController.js'
const router = express.Router()

router.route('/').get(getCategories)
router.route('/:id').get(getCategoriesById)
router.route('/catalogue/:id').get(getCategoriesByCatalogue)

export default router
