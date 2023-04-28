import { NextFunction } from 'express';
import HSRGameModel, { HSRGameDocument } from '../models/HSRGame';
import HSRCharacterModel from '../models/HSRCharacter';
import { filter, includes, map, random } from 'lodash';

export class HSRGameController {
  public createNewGame = async (): Promise<HSRGameDocument> => {
    const lastThree = await HSRGameModel.find().sort({ $natural: -1 }).limit(3)
    let characters = []

    if (lastThree && lastThree.length) {
      characters = filter(await HSRCharacterModel.find(), char => !includes(map(lastThree, game => game.answer), char.id))
    } else {
      characters = await HSRCharacterModel.find()
    }

    const answer = characters[random(characters.length - 1)].id
    return HSRGameModel.create({ answer }) as unknown as HSRGameDocument
  };

  public getTodaysGame = async (): Promise<HSRGameDocument> => {
    const last = (await HSRGameModel.find().sort({ $natural: -1 }).limit(1))[0]

    if (!last || last.createdAt.getTime() + (1 * 24 * 60 * 60 * 1000) < new Date().getTime()) {
      return await this.createNewGame();
    }

    return new Promise(resolve => resolve(last as unknown as HSRGameDocument));
  };
}