import { Module } from '@nestjs/common';
import { ProductsController } from '../controlers/products.controller';
import { ProductsService } from '../services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producer.entity';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Category, Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
