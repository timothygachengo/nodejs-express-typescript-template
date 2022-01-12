import 'reflect-metadata';
import { gCall } from '../../../../src/utils/test-utils/graphql';

jest.setTimeout(30000);

describe('Test the User Graphql resolver', () => {
  describe('Test the Hello world endpoint', () => {
    it('should return Hello world', async () => {
      const response = await gCall({
        source: `
                    query {
                        hello
                    }
                `
      });

      expect(response).toMatchObject({
        data: {
          hello: 'Hello World'
        }
      });
    });
  });
});
