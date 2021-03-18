import express from 'express'
import { getTypes, getTypesDetail } from '../controllers/typeController.js'

const router = express.Router()

router.route('/').get(getTypes)
router.route('/getAll').get(getTypesDetail)

export default router
