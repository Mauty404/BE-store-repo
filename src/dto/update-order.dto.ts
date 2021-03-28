import { CreateOrdersDto } from './create-orders.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateOrderDto extends PartialType(CreateOrdersDto) {}
