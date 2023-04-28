import express from 'express';
import HSRGameModel, { HSRGameDocument } from '../../models/HSRGame';
import { HSRGameController } from '../../controllers/HSRGame.controller';

const router = express.Router();

router.get<{}, HSRGameDocument[]>('/', async (req, res, next) => {
  try {
    res.send(await HSRGameModel.find());
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

router.get<{}, HSRGameDocument>('/today', async (req, res, next) => {
  const hsrGameController = new HSRGameController()

  try {
    res.send(await hsrGameController.getTodaysGame());
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

export default router;
