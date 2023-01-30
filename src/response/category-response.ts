
export class CategoryResponse {
    private id: number
    private slug: string
    private title: string
    private description: string
    private parent: CategoryResponse | null
    private children: CategoryResponse[]

    setId(id: number): this {
        this.id = id;
        return this;
    }

    setSlug(slug: string): this {
        this.slug = slug;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setDescription(description: string): this {
        this.description = description;
        return this;
    }

    setParent(parent: CategoryResponse | null): this {
        this.parent = parent
        return this;
    }

    setChildren(children: CategoryResponse[]): this {
        this.children = children
        return this;
    }
}