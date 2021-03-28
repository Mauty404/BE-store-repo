import { Module } from '@nestjs/common';
import { ProductsController } from '../controlers/products.controller';
import { ProductsService } from '../services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producer.entity';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { Order } from '../entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Category, Product, Order])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
