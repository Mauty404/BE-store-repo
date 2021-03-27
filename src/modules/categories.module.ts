import { Module } from '@nestjs/common';
import { CategoriesController } from '../controlers/categories.controller';
import { CategoriesService } from '../services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
