import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { UpdateProductsDto } from '../dto/update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsDto } from '../dto/create-products.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async findByCategory(categoryId: string) {
    const category = await this.categoryRepository.findOne(categoryId, {
      relations: ['products'],
    });
    if (!category) {
      throw new NotFoundException(`Category #${categoryId} not found`);
    }
    return category.products;
  }

  create(createProductsDto: CreateProductsDto) {
    const product = this.productRepository.create(createProductsDto);
    return this.productRepository.save(product);
  }

  async update(id: string, updateProductDto: UpdateProductsDto) {
    const product = await this.productRepository.preload({
      id: +id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
