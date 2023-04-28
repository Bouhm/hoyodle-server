import express from 'express';

import HSRCharacters from './HSRCharacters';
import HSRGames from './HSRGames';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  res.json({ why: "hello there" });
});

router.use('/hsr/characters', HSRCharacters);
router.use('/hsr/games', HSRGames);

export default router;
