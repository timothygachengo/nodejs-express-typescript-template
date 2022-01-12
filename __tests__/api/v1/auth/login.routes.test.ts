import app from '@example/app';
import request from 'supertest';

describe('Test the login routes API', () => {
  describe('Test the get route', () => {
    it('should return 200', async () => {
      const res = await request(app).get('/api/v1/users/auth/example');
      console.log(res);
    });
  });
});
