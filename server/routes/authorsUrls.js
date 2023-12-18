import { Router } from "express";
import AuthorsController from "../controllers/authorsController.js";
import { parseIntegerUrlParam } from "../middlewares/parseParams.js";
import pagination from "../middlewares/paginaton.js";
import getInstanse from "../middlewares/getInstanceByKey.js";
import { Author } from "../models/index.js";

const router = Router()

router.get('/', pagination, AuthorsController.getPage)

router.post('/', AuthorsController.create)

router.put('/:id', parseIntegerUrlParam('id'), getInstanse(Author), AuthorsController.update)

router.delete('/:id', parseIntegerUrlParam('id'), getInstanse(Author), AuthorsController.remove)

export default router
