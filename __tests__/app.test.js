const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Jest', () => {
  it('works as expected', () => {
    const hello = true;
    expect(hello).toBeTruthy();
    expect(hello).not.toBeFalsy();
  })
})

describe('App', () => {
  it('handles GET request to /test', async done => {
    const response = await request.get('/test')
    expect(response.status).toBe(200);
    done();
  })
})