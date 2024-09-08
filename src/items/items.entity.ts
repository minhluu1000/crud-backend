import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  category: string;

  @Column()
  price: number;
}