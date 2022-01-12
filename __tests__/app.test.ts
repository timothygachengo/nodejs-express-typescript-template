import app from '@example/app';
import request from 'supertest';

jest.setTimeout(30000);
describe('Test whether the app is working', () => {
  describe('Test the testing API', () => {
    it('should return 200', async () => {
      await request(app).get('/test').expect(200);
    });
  });
});
