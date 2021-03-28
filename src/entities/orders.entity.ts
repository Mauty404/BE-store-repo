import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { ShippingProvider } from './shipping.provider.entity';
import { Product } from './product.entity';
import { User } from './user.entity';

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
  shipping_provider: ShippingProvider;

  @ManyToOne((type) => Address, (address) => address.id)
  shipping_address: Address;

  @ManyToOne((type) => Product, (product) => product.id)
  product: Product;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
