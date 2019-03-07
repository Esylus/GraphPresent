import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Fans } from "./Fans";

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

  @OneToMany(type => Fans, fans => fans.bandMembers, { nullable: true })
  fans?: Fans[];

}
