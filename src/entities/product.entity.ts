import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producer } from './producer.entity';
import { Category } from './category.entity';
import { Order } from './orders.entity';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  factory_name: string;

  @Column()
  short_description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  quantity: number;

  @Column()
  image_source: string;

  @ManyToOne((type) => Producer, (producer) => producer.id)
  producerID: Producer;

  @ManyToOne((type) => Category, (category) => category.id)
  categoryID: Category;

  @OneToMany((type) => Order, (order) => order.productID)
  orders: Order[];
}
