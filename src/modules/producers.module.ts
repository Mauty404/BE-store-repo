import { Module } from '@nestjs/common';
import { ProducersController } from '../controlers/producers.controller';
import { ProducersService } from '../services/producers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../entities/producer.entity';
import { Product } from '../entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producer, Product])],
  controllers: [ProducersController],
  providers: [ProducersService],
})
export class ProducersModule {}
