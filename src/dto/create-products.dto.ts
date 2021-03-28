import { IsNumber, IsString } from 'class-validator';
import { Producer } from '../entities/producer.entity';
import { Category } from '../entities/category.entity';

export class CreateProductsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly factory_name: string;

  @IsNumber()
  readonly producer: Producer;

  @IsNumber()
  readonly category: Category;

  @IsString()
  readonly short_description: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;

  @IsString()
  readonly image_source: string;
}
