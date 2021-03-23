import { Module } from '@nestjs/common';
import { DictionaryController } from '../controlers/dictionary.controller';
import { ProducersService } from '../services/producers.service';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producer.entity';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Product, Category])],
  controllers: [DictionaryController],
  providers: [ProducersService, CategoriesService, ProductsService],
})
export class DictionaryModule {}
