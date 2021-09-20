import { Router } from 'express'
import { getSpecialPost } from '../controllers/specialPost.controller'

const router = Router()
router.get('/special-post', getSpecialPost)

export default router