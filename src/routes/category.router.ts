import {Router} from "express";
import {categoryController} from "@controller/category.controller";

const router = Router();

router.get('/categories', categoryController.index)
router.get('/categories/:slug', categoryController.getCategory)

export {router as categoryRouter}