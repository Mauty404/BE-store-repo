import { Producer } from '../entities/producer.entity';
import { Category } from '../entities/category.entity';
export declare class CreateProductsDto {
    readonly name: string;
    readonly factory_name: string;
    readonly producer_id: Producer;
    readonly category_id: Category;
    readonly short_description: string;
    readonly price: number;
    readonly quantity: number;
    readonly image_source: string;
}
