const request = require('supertest');

const server = require('./server.js');


describe('server.js', () => {
  it('server should be up and running', ()=> {
    expect(process.env.DB_ENV).toBe('testing');
  })

  describe('endpoints',()=> {
    describe('Get /', ()=> {

      
      it('should return 200 okay using async/await THE SQUAD', async ()=> {
         const res = await request(server).get('/');
         expect(res.status).toBe(200);
      })

      it('should return JSON', async () => {
        const res = await request(server).get('/');
        expect(res.type).toBe('application/json');
      })

      it('should return { api: "up"}', async()=> {
        const res = await request(server).get('/');
        expect(res.body).toEqual({api: "up"});
      })


    })
  })

})
