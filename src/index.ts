import "reflect-metadata";
import { createConnection } from "typeorm";
import { BandService } from "./bandService"

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

//Add a getBandMember
//Add fans and maybe locations
// Responses for mutations if easy

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  input NewBandMember{
    name: String
    realName: String
    instrument: String
    age: Int
    drink: String
    photoURL: String
  }

  type BandMember{
    id: Int
    name: String
    realName: String
    instrument: String
    age: Int
    drink: String
    fans: [Fans]
    photoURL: String
  }

  type Fans {
    name: String
    age: Int
  }

  type Mutation {
    fireMember(firedMemberId: Int): BandMember
    hireMember(newBandMember: NewBandMember): BandMember
  }

  type Query {
    bandMembers: [BandMember]
    bandMember(id: Int): BandMember 
  }
  
`;

// Provide resolver functions for your schema fields

createConnection().then(con => {


  const resolvers = {
    Query: {
      bandMembers: async () => {
        let bandService = new BandService(con);
        let theBand = await bandService.getBandMembers();
        return theBand
      },
      bandMember: async (source, args, context, ast) => {
        let bandService = new BandService(con);
        let member = await bandService.getBandMember(args.id);
        return member
      }
    },
    Mutation: {
      fireMember: async (source, args, context, ast) => {
        let bandService = new BandService(con);
        let firedMember = await bandService.fireBandMember(args.firedMemberId);
        return firedMember
      },
      hireMember: async (source, args, context, ast) => {
        let bandService = new BandService(con);
        let newMember = await bandService.hireBandMember(args.newBandMember);
        return newMember
      }
    }
  };


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });

  const app = express();


  app.get('/bandmembers', async (req, res) => {
    let bandService = new BandService(con);
    let theBand = await bandService.getBandMembers();
    res.send(JSON.stringify(theBand));
  });

  app.get('/bandmember/:id', async (req, res) => {
    let bandService = new BandService(con);
    let member = await bandService.getBandMember(req.params.id);
    res.send(JSON.stringify(member));
  });

  app.get('/test', function (req, res) {
    res.send('Invalid Enpoint');
  });


  server.applyMiddleware({ app });
  const port = process.env.PORT || 8080;

  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}`)
  );

});
