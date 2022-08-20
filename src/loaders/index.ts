import express from 'express';
import AppPlugins from './express';

const App = new AppPlugins(express());

const app = App.init();

export default app;
