import express, { Request } from 'express';
import HSRMessageModel, { HSRMessageDocument } from '../../models/HSRMessage.model';

const router = express.Router();

router.get<{}, HSRMessageDocument[]>('/', async (req, res, next) => {
  try {
    res.send(await HSRMessageModel.find());
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

router.get<{}, HSRMessageDocument>('/:id', async (req: any, res, next) => {
  const { id } = req.params;

  try {
    res.send((await HSRMessageModel.findById(id))!);
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

export default router;
