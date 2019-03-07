import { Connection, Repository } from "typeorm";
import { BandMembers as BandMemberEntity } from './entity/BandMembers'

export class BandService {
  private bandMemberRepository: Repository<BandMemberEntity>;

  constructor(connection: Connection) {
    this.bandMemberRepository = connection.getRepository(BandMemberEntity);
  }

  public getBandMembers = async () => {
    let getBandMembers = await this.bandMemberRepository.find();
    return getBandMembers;
  }

  public getBandMember = async (id: number) => {
    let getBandMember = await this.bandMemberRepository.findOne({ where: { id: id } });
    return getBandMember;
  }

  public fireBandMember = async (id: number) => {
    let fireBandMember = await this.bandMemberRepository
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
  };

  public hireBandMember = async (newBandMember: any) => {

    // console.log('saveBandMember', newBandMember);
    let newMemberEntity = new BandMemberEntity();
    newMemberEntity.name = newBandMember.name;
    newMemberEntity.realName = newBandMember.realName;
    newMemberEntity.age = newBandMember.age;
    newMemberEntity.drink = newBandMember.drink;
    newMemberEntity.photoURL = newBandMember.photoURL;

    let savedMember = await this.bandMemberRepository.save(newMemberEntity);
  };

  public gunsNRoses = [
    {
      name: "Axel Rose",
      realName: "William Bruce Rose Jr.",
      instrument: "Vocals, Piano, Screaming and Crying",
      age: 57,
      drink: "Tequila",
      fans: null
    },
    {
      name: "Slash",
      realName: "Saul Hudson",
      instrument: "Lead Guitar",
      age: 53,
      drink: "Cocaine flavored tequila",
      fans: null
    }
  ]

  public fans = [
    {
      name: "Suzy",
      age: 25,
      location: null
    },
    {
      name: "Billy",
      age: 25,
      location: null
    },
  ]

  public fans1 = [
    {
      name: "Tommy",
      age: 25,
      location: null
    },
    {
      name: "Sassy",
      age: 25,
      location: null
    },
  ]

  public location = [
    {
      city: "Victoria",
      province: "BC"
    },
    {
      city: "Vancouver",
      province: "BC"
    },
    {
      city: "Nelson",
      province: "BC"
    },
    {
      city: "Tofino",
      province: "BC"
    }
  ]


}


