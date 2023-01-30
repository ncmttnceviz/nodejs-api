import {CategoryEntity} from "@entity/category.entity";
import {categoryRepository} from "@repository/category.repository";
import {CategoryResponse} from "../response/category-response";

class CategoryService {
    async getMainCategories(): Promise<CategoryResponse[]> {
        const categories = await categoryRepository.getMainCategories();
        return this.decorateCategories(categories)
    }

    async getCategory(slug: string): Promise<CategoryResponse | null> {
        const category = await categoryRepository.getCategory(slug)
        if (!category) return null

        const parent = category.parent ? this.decorateCategories([category.parent])[0] : null

        return new CategoryResponse()
            .setId(category.id)
            .setTitle(category.title)
            .setDescription(category.description)
            .setParent(parent)
            .setChildren(this.decorateCategories(category.children));
    }

    decorateCategories(categories: CategoryEntity[]) {
        const result: CategoryResponse[] = [];
        categories.map((category: CategoryEntity) => {
            const res = new CategoryResponse()
                .setId(category.id)
                .setTitle(category.title)
                .setSlug(category.slug)
                .setDescription(category.description);
            result.push(res)
        })
        return result;
    }
}

export const categoryService = new CategoryService();