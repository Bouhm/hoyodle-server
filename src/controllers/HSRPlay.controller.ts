import { NextFunction } from 'express';
import HSRCharacterModel from '../models/HSRCharacter.model';
import { filter, includes, map, random } from 'lodash';
import HSRPlayModel, { HSRPlayDocument } from '../models/HSRPlay.model';
import HSRGameModel, { HSRGameDocument } from '../models/HSRGame.model';

export class HSRPlayController {
  public createPlay = async (game: string, guesses: number, correct: boolean): Promise<HSRPlayDocument> => {
    // const game = await HSRGameModel.findById(gameId)
    return HSRPlayModel.create({ game, guesses, correct }) as unknown as HSRPlayDocument
  };

  public getPlaysStats = async (game: string): Promise<string> => {
    const totalPlays = await HSRGameModel.findById(game).count()
    const playsPct = await HSRPlayModel.aggregate([
      {
        $match: { game: Object(game) }
      },
      { $group: { _id: "$correct", count: { "$sum": 1 } } },
      {
        $project: {
          "count": 1,
          "percentage": {
            "$concat": [{ "$substr": [{ "$multiply": [{ "$divide": ["$count", { "$literal": totalPlays }] }, 100] }, 0, 2] }, "", "%"]
          }
        }
      }
    ])

    return ""
  };

  public deleteOldPlays = async (): Promise<HSRPlayDocument[]> => {
    const maxDays = 3;
    return HSRPlayModel.deleteMany({ createdAt: { $lt: new Date((new Date()).getTime() - 3 * 1000 * 60 * 60 * 24 * maxDays) } }) as unknown as HSRPlayDocument[];
  };
}