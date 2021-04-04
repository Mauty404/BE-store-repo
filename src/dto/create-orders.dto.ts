import { IsNumber, IsString } from 'class-validator';
import { Address } from '../entities/address.entity';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

export class CreateOrdersDto {
  @IsNumber()
  readonly shippingProvider: ShippingProvider;

  @IsNumber()
  readonly shippingAddress: Address;

  @IsString()
  readonly status: string;

  @IsNumber()
  readonly totalPrice: number;

  @IsNumber()
  readonly product: Product;

  @IsNumber()
  readonly user: User;

  @IsNumber()
  readonly count: number;
}
