import { NextFunction } from 'express';
import HSRGameModel, { HSRGameDocument } from '../models/HSRGame.model';
import HSRCharacterModel from '../models/HSRCharacter.model';
import HSRMessageModel from '../models/HSRMessage.model';
import { filter, includes, map, random } from 'lodash';
import { HSRPlayController } from './HSRPlay.controller';
import { HSRMessageController } from './HSRMessage.controller';

export class HSRGameController {
  private hsrPlayController = new HSRPlayController();
  private hsrMessageController = new HSRMessageController();

  public createNewGame = async (): Promise<HSRGameDocument> => {
    const lastThree = await HSRGameModel.find().sort({ $natural: -1 }).limit(3)
    const characters = await HSRCharacterModel.find()
    let classicChoices = []
    let messagesChoices = []

    if (lastThree && lastThree.length) {
      classicChoices = filter(characters, char => {
        return !includes(map(lastThree, game => game.classicAnswer.toString()), char._id.toString())
      })
    } else {
      classicChoices = characters;
    }

    if (lastThree && lastThree.length) {
      messagesChoices = filter(characters, char => {
        return !includes(map(lastThree, game => game.messagesAnswer.toString()), char._id.toString())
      })
    } else {
      messagesChoices = characters;
    }

    const classicAnswer = classicChoices[random(classicChoices.length - 1)]._id
    const messagesAnswerObj = messagesChoices[random(messagesChoices.length - 1)]
    const characterMessages = await this.hsrMessageController.getMessagesByCharacterId(messagesAnswerObj.id)
    const messagesAnswer = characterMessages[random(characterMessages.length - 1)]

    return HSRGameModel.create({ classicAnswer, messagesAnswer }) as unknown as HSRGameDocument
  };

  public getTodaysGames = async (): Promise<HSRGameDocument> => {
    const last = (await HSRGameModel.find().sort({ $natural: -1 }).limit(1))[0]

    // if (!last || last.createdAt.getTime() + (1 * 24 * 60 * 60 * 1000) < new Date().getTime()) {
    //   return await this.createNewGame();
    // }

    return new Promise(resolve => resolve(last as unknown as HSRGameDocument));
  };
}