import { startServer, server } from "../../../../startServer";
import resolvers from '../../../resolvers';
import typeDefs from '../../../typeDefs';

describe('Users graphql', () => {
  beforeAll(async () => {
    await startServer({ typeDefs, resolvers })
  }) 

  afterAll(async ()=> {
    server.stop()
  })

  it('Return users', async () =>{
    const result = await server.executeOperation({
      query: 'query Posts { users { _id firstName } }'
    })

    expect(result.data).toEqual({"users": []})
  })

  it('Add a user', async () =>{
    const result = await server.executeOperation({
      query: 'mutation CreateUser($data: UserInput!) { createUser(data: $data) { _id firstName } }',
      variables: {
        "data": {
          "firstName": "Evandro",
          "lastName": "Capovilla",
          "email": "evandrocapovillajr@gmail.com",
          "active": true
        }
      }
    })

    expect(result.data.createUser.firstName).toEqual("Evandro")
  })

  it('Return users', async () =>{
    const result = await server.executeOperation({
      query: 'query Posts { users { _id firstName } }'
    })

    expect(result.data.users[0].firstName).toEqual("Evandro")
  })
})