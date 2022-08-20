import axios from '@node-template/utils/axios';
import IceAndFireApi from './IceAndFireApi';

describe('IceAndFireApi', () => {
    describe('Test iceandfireapi class', () => {
        it('should be defined', () => {
            expect(IceAndFireApi).toBeDefined();
        });
    });

    describe('Test class methods', () => {
        describe('Test getResources method', () => {
            it('should be defined', () => {
                const api = new IceAndFireApi(axios);
                expect(api.getResources).toBeDefined();
                expect(api.getBooks).toBeDefined();
            });

            it('should return resources', async () => {
                const api = new IceAndFireApi(axios);
                const resources = await api.getResources();
                expect(resources).toBeDefined();
                expect(resources.books).toBeDefined();
                expect(resources.characters).toBeDefined();
                expect(resources.houses).toBeDefined();
            });
        });
    });
});
