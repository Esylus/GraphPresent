import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BandMembers {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  realName: string;

  @Column()
  instrument: string;

  @Column()
  age: number;

  @Column()
  drink: string;

  @Column()
  photoURL: string;

}
