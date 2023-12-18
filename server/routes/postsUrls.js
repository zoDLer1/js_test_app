import { Router } from "express";
import PostsController from "../controllers/postsController.js";
import { parseIntegerUrlParam } from "../middlewares/parseParams.js";
import pagination from "../middlewares/paginaton.js";
import getInstanse from "../middlewares/getInstanceByKey.js";
import { Post } from "../models/index.js";


const router = Router()

router.get('/', pagination, PostsController.getPage)

router.post('/', PostsController.create)

router.put('/:id', parseIntegerUrlParam('id'), getInstanse(Post), PostsController.update)

router.delete('/:id', parseIntegerUrlParam('id'), getInstanse(Post), PostsController.remove)

export default router
