import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrdersDto } from '../dto/create-orders.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() createOrdersDto: CreateOrdersDto) {
    return this.ordersService.create(createOrdersDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrdersDto);
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return this.ordersService.remove(id);
  }
}
