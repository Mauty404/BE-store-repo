import { Producer } from '../entities/producer.entity';
import { Category } from '../entities/category.entity';
export declare class CreateProductsDto {
    readonly name: string;
    readonly factoryName: string;
    readonly producer: Producer;
    readonly category: Category;
    readonly shortDescription: string;
    readonly price: number;
    readonly quantity: number;
    readonly imageSource: string;
}
