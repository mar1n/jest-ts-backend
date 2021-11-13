const request = require('supertest');
const { app } = require('../../server');

describe('server test', () => {
  test('/user get result', async () => {
    const response = await request(app).get('/user').expect(200);
    console.log('response body', response.body)
  });
});
