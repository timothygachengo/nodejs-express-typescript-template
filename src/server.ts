import http from 'http';
import app from './app';
import Logger from './core/logger';
import dayjs from 'dayjs';

const server = http.createServer(app);

server.on('error', (err: Error) => {
  Logger.handleAppErrors('---Server Error--->', false, err);
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started at ${dayjs().tz('Africa/Nairobi').format('LLLL')} on port ${port}`);
});
