import { IsNumber, IsString } from 'class-validator';
import { Address } from '../addresses/address.entity';
import { ShippingProvider } from '../shipping_providers/shipping.provider.entity';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

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
