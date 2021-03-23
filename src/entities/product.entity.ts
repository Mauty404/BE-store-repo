import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producer } from './producer.entity';
import { Category } from './category.entity';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  factory_name: string;

  @ManyToOne((type) => Producer, (producer) => producer.id)
  producer_id: Producer;

  @ManyToOne((type) => Category, (category) => category.id)
  category_id: Category;

  @Column()
  short_description: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  quantity: number;

  @Column()
  image_source: string;
}
