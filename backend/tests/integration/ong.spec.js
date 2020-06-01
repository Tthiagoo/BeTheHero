const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async()=>{
    await connection.migrate.rollback()
    await connection.migrate.latest()
  });
  afterAll(async()=>{
    await connection.destroy()
  })
  it('Deve criar uma ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ong finaaaal teste ",
        email: "contt@hotm.com",
        whatsapp: "11958488382",
        city: "334454",
        uf: "sp"
      })
      console.log(response.body)

  })
})