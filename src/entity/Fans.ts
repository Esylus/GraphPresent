import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
// import { BandMembers } from "./BandMembers";

@Entity()
export class Fans {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  // @ManyToOne(type => BandMembers, bandMembers => bandMembers.fans)
  // @JoinColumn()
  // bandMembers?: BandMembers;

}
