import { IsNumber, IsString } from 'class-validator';
import { Address } from '../entities/address.entity';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

export class CreateOrdersDto {
  @IsNumber()
  readonly shipping_provider: ShippingProvider;

  @IsNumber()
  readonly shipping_address: Address;

  @IsString()
  readonly status: string;

  @IsNumber()
  readonly total_price: number;

  @IsNumber()
  readonly product: Product;

  @IsNumber()
  readonly user: User;

  @IsNumber()
  readonly count: number;
}
