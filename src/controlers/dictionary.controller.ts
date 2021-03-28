import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from '../services/categories.service';
import { ProducersService } from '../services/producers.service';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';
import { AddressesService } from '../services/addresses.service';
import { OrdersService } from '../services/orders.service';
import { ShippingProvidersService } from '../services/shipping.providers.service';

@ApiTags('Dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly producersService: ProducersService,
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService,
    private readonly addressesService: AddressesService,
    private readonly shippingProvidersService: ShippingProvidersService,
    private readonly ordersService: OrdersService,
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
  @Get('/users')
  findAllUsers() {
    return this.usersService.findAll();
  }
  @Get('/addresses')
  findAllAddresses() {
    return this.addressesService.findAll();
  }
  @Get('/shippingProviders')
  findAllShippingProviders() {
    return this.shippingProvidersService.findAll();
  }
  @Get('/orders')
  findAllOrders() {
    return this.ordersService.findAll();
  }
}
