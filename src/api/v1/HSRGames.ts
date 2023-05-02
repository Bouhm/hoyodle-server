import express, { Request } from 'express';
import HSRGameModel, { HSRGameDocument } from '../../models/HSRGame.model';
import { HSRGameController } from '../../controllers/HSRGame.controller';
import { error } from 'console';
import { HSRPlayController } from '../../controllers/HSRPlay.controller';

const router = express.Router();

router.get<{}, HSRGameDocument[]>('/', async (req, res, next) => {
  try {
    res.send(await HSRGameModel.find());
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

router.post<{}, HSRGameDocument>('/:id/plays/create', async (req: any, res, next) => {
  const hsrPlayController = new HSRPlayController()
  const { id } = req.params;
  const { guesses, correct } = req.body;
  hsrPlayController.createPlay(id, guesses, correct);

  try {
    // res.send(await HSRPlayController.getPlaysStat(gameId, guesses));
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

router.get<{}, HSRGameDocument[]>('/:id', async (req: any, res, next) => {
  const { id } = req.params;

  try {
    res.send((await HSRGameModel.findById(id))!);
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
