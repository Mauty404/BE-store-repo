import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';

@Entity('ShippingProviders')
export class ShippingProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany((type) => Order, (order) => order.shippingProviderID)
  orders: Order[];
}
