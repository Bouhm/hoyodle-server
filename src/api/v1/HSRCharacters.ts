import express from 'express';
import HSRCharacterModel, { HSRCharacterDocument } from '../../models/HSRCharacter';

const router = express.Router();

router.get<{}, HSRCharacterDocument[]>('/', async (req, res, next) => {
  try {
    res.send(await HSRCharacterModel.find());
  } catch (err: any) {
    console.error(err.message)
    next(err)
  }
});

export default router;
