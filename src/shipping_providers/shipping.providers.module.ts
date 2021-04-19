import { Module } from '@nestjs/common';
import { ShippingProvidersController } from './shipping.providers.controller';
import { ShippingProvidersService } from './shipping.providers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingProvider } from './shipping.provider.entity';
import { Order } from '../orders/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingProvider, Order])],
  controllers: [ShippingProvidersController],
  providers: [ShippingProvidersService],
})
export class ShippingProvidersModule {}
