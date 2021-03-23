import { ProductsService } from '../services/products.service';
import { CreateProductsDto } from '../dto/create-products.dto';
import { UpdateProductsDto } from '../dto/update-products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("../entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("../entities/product.entity").Product>;
    findByCategory(categoryId: string): Promise<import("../entities/product.entity").Product[]>;
    create(createProductsDto: CreateProductsDto): Promise<import("../entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductsDto): Promise<import("../entities/product.entity").Product>;
    remove(id: string): Promise<import("../entities/product.entity").Product>;
}
