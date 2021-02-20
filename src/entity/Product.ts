import {
  Entity,
  ObjectIdColumn,
	Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Field, Int, ObjectType,ID } from "type-graphql";

@ObjectType()
@Entity()
export class Product {
 
 @Field(type => ID)
  @ObjectIdColumn()
 _id!: string;
	
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field(() => Int)
  @Column("int", { default: 0 })
  quantity!: number;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
	
  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
	
}
