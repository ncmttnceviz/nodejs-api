import {postgres} from "@config/postgres.config";
import {CategoryEntity} from "@entity/category.entity";

export const categoryRepository = postgres.getRepository(CategoryEntity).extend({

    async getMainCategories(): Promise<CategoryEntity[]> {
        return this.createQueryBuilder('c')
            .where('c.parent is null')
            .cache(true)
            .getMany()
    },

    async getCategory(slug: string): Promise<CategoryEntity | null> {
        return this.createQueryBuilder('c')
            .where('c.slug=:slug', {slug: slug})
            .leftJoinAndSelect('c.children', 'child')
            .leftJoinAndSelect('c.parent','parent')
            .cache(true)
            .getOne()
    }

})
