import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/orders.entity';
import { Repository } from 'typeorm';
import { CreateOrdersDto } from '../dto/create-orders.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find();
  }

  async findOne(id: string) {
    const order = await this.orderRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  create(createOrderDto: CreateOrdersDto) {
    const order = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(order);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.preload({
      id: +id,
      ...updateOrderDto,
    });
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return this.orderRepository.save(order);
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    return this.orderRepository.remove(order);
  }
}
