import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shipping_providers')
export class ShippingProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
