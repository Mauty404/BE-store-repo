import { Producer } from './producer.entity';
import { Category } from './category.entity';
import { Order } from './orders.entity';
export declare class Product {
    id: number;
    name: string;
    factory_name: string;
    short_description: string;
    price: number;
    quantity: number;
    image_source: string;
    producerID: Producer;
    categoryID: Category;
    orders: Order[];
}
