import express from 'express';
import AppPlugins from './express';

describe('Test Express plugins', () => {
    it('should be defined', () => {
        expect(AppPlugins).toBeDefined();
    });

    it('should be a class', () => {
        expect(typeof AppPlugins).toBe('function');
    });

    describe('Test init method', () => {
        it('should be defined', () => {
            expect(new AppPlugins(express()).init).toBeDefined();
        });

        it('should be a function', () => {
            expect(typeof new AppPlugins(express()).init()).toBe('function');
        });

        it('should return an instance of AppPlugins', () => {
            const appPlugins = new AppPlugins(express());
            expect(appPlugins instanceof AppPlugins).toBe(true);
        });
    });
});
