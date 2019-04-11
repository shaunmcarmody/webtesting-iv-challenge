const request = require('supertest');
const server = require('./server.js');

describe('users route', () => {
  describe('POST /', () => {
    it('should respond with 201 Create and return JSON', async () => {
      const res = await request(server).post('/').send({ username: 'test' });
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ username: 'test' });
    });
  });

  describe('DELETE /:id', () => {
    it('should respond with 200 OK and return JSON', async () => {
      const id = 13;
      const res = await request(server).delete(`/${id}`);
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toBeTruthy();
    });
  });
})