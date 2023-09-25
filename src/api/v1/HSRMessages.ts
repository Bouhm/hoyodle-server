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

export default router;
