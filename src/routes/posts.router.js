import { Router } from 'express'
import { getPosts, getPostByID } from '../controllers/posts.controller'

const route = Router()
route.get('/posts', getPosts)
route.get('/posts/:id', getPostByID)

export default route