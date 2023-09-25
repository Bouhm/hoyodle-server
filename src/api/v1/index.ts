import express from 'express';

import HSRCharacters from './HSRCharacters';
import HSRGames from './HSRGames';
import HSRMessages from './HSRMessages';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  res.json({ why: "hello there" });
});

router.use('/hsr/characters', HSRCharacters);
router.use('/hsr/messages', HSRMessages);
router.use('/hsr/games', HSRGames);

export default router;
