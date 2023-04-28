import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        why: 'hello there',
      }, done);
  });
});

describe('GET /api/v1/hsr/characters', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/hsr/characters')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
  });
});
