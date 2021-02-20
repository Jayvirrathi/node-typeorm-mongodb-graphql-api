import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
	Field,
  ObjectType
} from "type-graphql";
import { Product } from "../entity/Product";
import { getMongoRepository } from "typeorm";

@InputType()
class ProductInput {
  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => Int, {nullable: true})
  quantity?: number;
}

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {

	  const productRepository = getMongoRepository(Product); 
  
	  
    const newProduct = productRepository.create(variables);
	  const results = await productRepository.save(newProduct);
	  return results;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => String) id: string) {
	  const productRepository = getMongoRepository(Product); 
    await productRepository.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("id", () => String) id: string,
    @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
  ) {

	  const productRepository = getMongoRepository(Product);
	await productRepository.findOneAndUpdate({_id:ObjectType(id)}, {$set:{name:fields.name,quantity:fields.quantity,updatedAt:new Date()}},{  returnOriginal: false });

     return true;

  }

  @Query(() => [Product])
  products() {
	const productRepository = getMongoRepository(Product); 
    return productRepository.find();
  }
}
