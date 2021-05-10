import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { UpdateProductsDto } from './update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsDto } from './create-products.dto';
import { Category } from '../categories/category.entity';
import * as Http from 'http';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: ['orders'],
    });
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id, {
      relations: ['orders'],
    });
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

    const { name } = createProductsDto;
    const { factoryName } = createProductsDto;
    const { price } = createProductsDto;
    const { quantity } = createProductsDto;

    if (typeof name !== 'string') {
      throw new HttpException(
        'Name must be string',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (factoryName.length != 10) {
      throw new HttpException(
        'Factory name must be 10 character long',
          HttpStatus.BAD_REQUEST,
      );
    }

    if(price < 0 ) {
      throw new HttpException(
        'Price can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof price === 'string') {
      throw new HttpException(
        'Price can not be a string',
        HttpStatus.CONFLICT,
      );
    }

    if(quantity < 0) {
      throw new HttpException(
        'Quantity can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof quantity === 'string') {
      throw new HttpException(
        'Quantity can not be a string',
        HttpStatus.CONFLICT,
      );
    }

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

    const { name } = updateProductDto;
    const { factoryName } = updateProductDto;
    const { price } = updateProductDto;
    const { quantity } = updateProductDto;

    if (typeof name !== 'string') {
      throw new HttpException(
        'Name must be string',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (factoryName.length != 10) {
      throw new HttpException(
        'Factory name must be 10 character long',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(price < 0 ) {
      throw new HttpException(
        'Price can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof price === 'string') {
      throw new HttpException(
        'Price can not be a string',
        HttpStatus.CONFLICT,
      );
    }

    if(quantity < 0) {
      throw new HttpException(
        'Quantity can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof quantity === 'string') {
      throw new HttpException(
        'Quantity can not be a string',
        HttpStatus.CONFLICT,
      );
    }

    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
