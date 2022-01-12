import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: false })
  name: string

  @Column({ length: 250, nullable: false })
  slug: string
}
