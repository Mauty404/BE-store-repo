import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { AddressesController } from '../controlers/addresses.controller';
import { AddressesService } from '../services/addresses.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
