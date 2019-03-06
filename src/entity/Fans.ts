import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Fans {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  location: number;

}
