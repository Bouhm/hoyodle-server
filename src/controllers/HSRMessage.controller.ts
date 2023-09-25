import { NextFunction } from 'express';
import HSRGameModel, { HSRGameDocument } from '../models/HSRGame.model';
import HSRCharacterModel from '../models/HSRCharacter.model';
import HSRMessageModel, { HSRMessageDocument } from '../models/HSRMessage.model';
import { filter, includes, map, random } from 'lodash';
import { HSRPlayController } from './HSRPlay.controller';

export class HSRMessageController {
  public getMessagesByCharacterId = async (characterId: number): Promise<HSRMessageDocument[]> => {
    return HSRCharacterModel.find({ 'contacts.id': characterId, type: 'Characters' })
  };
}