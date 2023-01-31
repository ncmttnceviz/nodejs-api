import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'categories'})
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "integer", default: null, foreignKeyConstraintName:'parentId'})
    parentId: CategoryEntity

    @Column()
    title: string

    @Column()
    description: string

    @Column({nullable: false})
    slug: string

    @ManyToOne(() => CategoryEntity,  category => category.children )
    parent: CategoryEntity

    @OneToMany(() => CategoryEntity, (category) => category.parent)
    @JoinColumn({
        name: 'parent',
        referencedColumnName: 'id',
    })
    children: CategoryEntity[]
}