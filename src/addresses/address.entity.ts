import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { User } from '../users/user.entity';

@Entity('Addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  land: string;

  @Column()
  region: string;

  @Column()
  city: string;

  @Column()
  postalAddress: string;

  @Column()
  street: string;

  @Column()
  propertyNumber: string;

  @Column()
  buildingNumber: string;

  @OneToMany((type) => Order, (order) => order.shippingProviderID)
  orders: Order[];

  @OneToMany((type) => User, (user) => user.addressID)
  users: User[];
}
