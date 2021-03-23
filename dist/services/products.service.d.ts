import { Product } from '../entities/product.entity';
import { UpdateProductsDto } from '../dto/update-products.dto';
import { Repository } from 'typeorm';
import { CreateProductsDto } from '../dto/create-products.dto';
import { Category } from '../entities/category.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    findByCategory(categoryId: string): Promise<Product[]>;
    create(createProductsDto: CreateProductsDto): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductsDto): Promise<Product>;
    remove(id: string): Promise<Product>;
}
