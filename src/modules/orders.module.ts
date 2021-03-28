import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from '../services/orders.service';
import { OrdersController } from '../controlers/orders.controller';
import { Order } from '../entities/orders.entity';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { Address } from '../entities/address.entity';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, ShippingProvider, Address, User, Product]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
