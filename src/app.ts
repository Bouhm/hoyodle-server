import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cron from 'node-cron';
import { HSRGameController } from './controllers/HSRGame.controller';

import * as middlewares from './middlewares';
import api from './api/v1';
import connectDb from './util/connection';
import mongoose from 'mongoose';

require('dotenv').config();
const app = express();
const hsrGameController = new HSRGameController();

connectDb();
mongoose.connection.once('open', () => {
  cron.schedule('0 9 * * *', () => {
    hsrGameController.createNewGame();
  })

  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use('/api/v1', api);

  app.use(middlewares.notFound);
  app.use(middlewares.errorHandler);

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
})

export default app