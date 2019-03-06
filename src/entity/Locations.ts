import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Locations {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  province: string;

}
