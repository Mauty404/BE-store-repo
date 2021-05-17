import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../addresses/address.entity';
import { ShippingProvider } from '../shipping_providers/shipping.provider.entity';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';

@Entity('Orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  total_price: number;

  @Column()
  count: number;

  @ManyToOne(
    (type) => ShippingProvider,
    (shippingProvider) => shippingProvider.id,
  )
  shippingProviderID: ShippingProvider;

  @ManyToOne((type) => Address, (address) => address.id)
  shippingAddressID: Address;

  @ManyToOne((type) => Product, (product) => product.id)
  productID: Product;

  @ManyToOne((type) => User, (user) => user.id)
  userID: User;
}

