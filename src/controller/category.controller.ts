import {NextFunction, Request, Response} from "express";
import {categoryService} from "@service/category.service";
import {ResponseOrganizer} from "@app/services/response-organizer.service";
import {BadRequest} from "@error/bad-request.error";
import {languageService} from "@app/services/language.service";

class CategoryController {
    async index(req: Request, res: Response, next: NextFunction) {
        const categories = await categoryService.getMainCategories().catch((err) => {
            return next(err)
        })

        const response = new ResponseOrganizer().setData(categories)

        res.sendData(response)
    }

    async getCategory(req: Request, res: Response, next: NextFunction) {
        const {slug} = req.params
        const category = await categoryService.getCategory(slug)

        if (!category) return next(new BadRequest(languageService.trans('categoryNotFound'),'CCFGC'))

        const response = new ResponseOrganizer().setData(category)

        res.sendData(response)
    }
}

export const  categoryController = new CategoryController();
