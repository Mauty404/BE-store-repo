import { Module } from '@nestjs/common';
import { ShippingProvidersController } from '../controlers/shipping.providers.controller';
import { ShippingProvidersService } from '../services/shipping.providers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { Order } from '../entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingProvider, Order])],
  controllers: [ShippingProvidersController],
  providers: [ShippingProvidersService],
})
export class ShippingProvidersModule {}
