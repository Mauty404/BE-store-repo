import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '../orders/orders.entity';
import { Address } from '../addresses/address.entity';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  is_worker: boolean;

  @ManyToOne((type) => Address, (address) => address.id)
  addressID: Address;

  @OneToMany((type) => Order, (order) => order.userID)
  orders: Order[];
}
