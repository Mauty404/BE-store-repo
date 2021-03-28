import { Module } from '@nestjs/common';
import { DictionaryController } from '../controlers/dictionary.controller';
import { ProducersService } from '../services/producers.service';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producer.entity';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { User } from '../entities/user.entity';
import { Address } from '../entities/address.entity';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { Order } from '../entities/orders.entity';
import { UsersService } from '../services/users.service';
import { AddressesService } from '../services/addresses.service';
import { ShippingProvidersService } from '../services/shipping.providers.service';
import { OrdersService } from '../services/orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producer,
      Product,
      Category,
      User,
      Address,
      ShippingProvider,
      Order,
    ]),
  ],
  controllers: [DictionaryController],
  providers: [
    ProducersService,
    CategoriesService,
    ProductsService,
    UsersService,
    AddressesService,
    ShippingProvidersService,
    OrdersService,
  ],
})
export class DictionaryModule {}
