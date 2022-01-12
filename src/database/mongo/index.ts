import mongoose from 'mongoose';
import Logger from '../../core/logger';

export const URL = 'mongodb://127.0.0.1:27017/example';

const options = {
  minPoolSize: 5,
  maxPoolSize: 30,
  autoIndex: true,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
};

// connect to the database
mongoose.connect(URL, options)
  .then(() => {
    Logger.apiLog(` MongoDB database connected`);
  }).catch(e => {
    Logger.databaseActivityError('MongoDB database connection failed', false);
  });

// connection events
mongoose.connection.on('connected', () => {
  Logger.databaseActivityInfo('Mongoose default connection open to ' + URL);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  Logger.databaseActivityError('Mongoose default connection error: ' + err, false);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  Logger.databaseActivityInfo('Mongoose default connection disconnected');
});

export default mongoose;