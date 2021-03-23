import { Producer } from './producer.entity';
import { Category } from './category.entity';
export declare class Product {
    id: number;
    name: string;
    factory_name: string;
    producer_id: Producer;
    category_id: Category;
    short_description: string;
    price: number;
    quantity: number;
    image_source: string;
}
