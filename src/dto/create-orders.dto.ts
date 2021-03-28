import { IsNumber, IsString } from 'class-validator';

export class CreateOrdersDto {
  @IsNumber()
  readonly shipping_provider_id: number;

  @IsNumber()
  readonly shipping_address_id: number;

  @IsString()
  readonly status: string;

  @IsNumber()
  readonly total_price: number;

  @IsNumber()
  readonly product_id: number;

  @IsNumber()
  readonly user_id: number;

  @IsNumber()
  readonly count: number;
}
