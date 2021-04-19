import { CreateOrdersDto } from './create-orders.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateOrdersDto extends PartialType(CreateOrdersDto) {}
