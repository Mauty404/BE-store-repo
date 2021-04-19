import { Module } from '@nestjs/common';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from './producer.entity';
import { Product } from '../products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Product])],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}
