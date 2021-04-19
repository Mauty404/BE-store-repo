import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../producers/producer.entity';
import { Product } from './product.entity';
import { Category } from '../categories/category.entity';
import { Order } from '../orders/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Category, Product, Order])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
