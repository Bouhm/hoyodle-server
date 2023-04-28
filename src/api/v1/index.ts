import express from 'express';

import HSRCharacters from './HSRCharacters';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  res.json({ why: "hello there" });
});

router.use('/hsr/characters', HSRCharacters);

export default router;
