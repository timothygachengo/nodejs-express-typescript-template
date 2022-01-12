import app from '@example/app';
import request from 'supertest';

describe('Test the Express API', () => {
  describe('Test the app with a non-existent route', () => {
    describe('Test with application/json', () => {
      it('should return 404', async () => {
        await request(app).get('/not-found').expect(404);
      });
    });
    describe('Test with text/plain', () => {
      it('should return 404', async () => {
        await request(app).get('/not-found').set('Accept', 'text/plain').expect(404);
      });
    });

    describe('Test with another data type', () => {
      it('should return 404', async () => {
        await request(app).get('/not-found').set('Accept', 'application/xml').expect(406);
      });
    });
  });
});
