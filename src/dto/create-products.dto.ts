import { IsNumber, IsString } from 'class-validator';
import { Producer } from '../entities/producer.entity';
import { Category } from '../entities/category.entity';

export class CreateProductsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly factoryName: string;

  @IsNumber()
  readonly producer: Producer;

  @IsNumber()
  readonly category: Category;

  @IsString()
  readonly shortDescription: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;

  @IsString()
  readonly imageSource: string;
}
