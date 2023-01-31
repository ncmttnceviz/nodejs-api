import {Router} from "express";
import {authRouter} from "./auth.router";
import {userRouter} from "./user.router";
import {categoryRouter} from "./category.router";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(categoryRouter)

export {router as routesIndex}