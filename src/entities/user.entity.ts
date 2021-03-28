import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  address_id: number;
}
