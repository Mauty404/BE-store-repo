import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  property_number: string;

  @Column()
  building_number: string;
}
