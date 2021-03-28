import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Shipping_providers')
export class ShippingProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
