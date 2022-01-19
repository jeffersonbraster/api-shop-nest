import { Category } from 'src/category/category.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: false })
  name: string

  @Column({ length: 999, nullable: false })
  description: string

  @Column({ length: 250, nullable: false })
  slug: string

  @ManyToOne(
    type => Category,
    category => category.id,
  )
  category: Category
}
