import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shipping_provider_id: number;

  @Column()
  shipping_address_id: number;

  @Column()
  status: string;

  @Column()
  total_price: number;

  @Column()
  product_id: number;

  @Column()
  user_id: number;

  @Column()
  count: number;
}
