import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { ApiTags } from '@nestjs/swagger';
import { ProducersService } from '../services/producers.service';
import { ProductsService } from '../services/products.service';

@ApiTags('Dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly producersService: ProducersService,
    private readonly productsService: ProductsService,
  ) {}
  @Get('/categories')
  findAllCategories() {
    return this.categoriesService.findAll();
  }
  @Get('/producers')
  findAllProducers() {
    return this.producersService.findAll();
  }
  @Get('/products')
  findAllProducts() {
    return this.productsService.findAll();
  }
}
