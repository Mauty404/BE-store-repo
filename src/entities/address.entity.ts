import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';
import { User } from './user.entity';

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
  postal_address: string;

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
