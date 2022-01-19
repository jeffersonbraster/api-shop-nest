import { Category } from 'src/category/category.entity'
import { ProductCreateInput } from './dto/product-create.input'
import { Product } from './product.entity'

export class ProductMapper {
  public static toEntity(input: ProductCreateInput): Product {
    const entity = new Product()
    entity.name = input.name
    entity.description = input.description
    entity.slug = input.slug
    const category = new Category()
    category.id = input.category
    entity.category = category

    return entity
  }
}
