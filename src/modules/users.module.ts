import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersController } from '../controlers/users.controller';
import { UsersService } from '../services/users.service';
import { Order } from '../entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
