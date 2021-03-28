import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { AddressesController } from '../controlers/addresses.controller';
import { AddressesService } from '../services/addresses.service';
import { Module } from '@nestjs/common';
import { Order } from '../entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address, Order])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
