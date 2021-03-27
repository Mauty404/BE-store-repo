import { CategoriesService } from '../services/categories.service';
import { ProducersService } from '../services/producers.service';
import { ProductsService } from '../services/products.service';
export declare class DictionaryController {
    private readonly categoriesService;
    private readonly producersService;
    private readonly productsService;
    constructor(categoriesService: CategoriesService, producersService: ProducersService, productsService: ProductsService);
    findAllCategories(): Promise<import("../entities/category.entity").Category[]>;
    findAllProducers(): Promise<import("../entities/producer.entity").Producer[]>;
    findAllProducts(): Promise<import("../entities/product.entity").Product[]>;
}
