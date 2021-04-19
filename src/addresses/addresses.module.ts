import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { Module } from '@nestjs/common';
import { Order } from '../orders/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address, Order])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
