import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { filter, includes, map } from 'lodash';
import connectDb from '../util/connection';
import HSRCharacterModel, { HSRCharacterDocument } from '../models/HSRCharacter.model';
import HSRGameModel from '../models/HSRGame.model';
import { Path, Element, Sex, Faction } from '../interfaces/Enums';
import { omit, values } from 'lodash';
import HSRMessageModel from '../models/HSRMessage.model';


connectDb();
mongoose.connection.once('open', async () => {
  const charactersPath = path.join(__dirname, 'json/characters');
  const characterJsons = fs.readdirSync(charactersPath).filter((file: any) => path.extname(file) === '.json');

  const messagesPath = path.join(__dirname, 'json/messages');
  const messageJsons = fs.readdirSync(messagesPath).filter((file: any) => path.extname(file) === '.json');

  try {
    await Promise.all(map(characterJsons, (file: any) => {
      const fileData = fs.readFileSync(path.join(charactersPath, file));
      const characterJson = JSON.parse(fileData.toString());
      const character = {
        id: characterJson._id,
        name: characterJson.name,
        rarity: characterJson.rarity,
        weapon: characterJson.path.name,
        element: characterJson.combat_type.name,
        faction: characterJson.faction.name
      };
      return HSRCharacterModel.findOneAndUpdate({ id: character.id }, character, { new: true, upsert: true });
    }));

    await Promise.all(map(messageJsons, (file: any) => {
      const fileData = fs.readFileSync(path.join(messagesPath, file));
      const messageJson = JSON.parse(fileData.toString());
      const message = {
        id: messageJson.id,
        contacts: omit(messageJson, 'typeId'),
        relatedMessages: messageJson.relatedMessages,
        startingMessageId: messageJson.sections[0].startingMessageId[0],
        messages: values(messageJson.sections[0].messages),
        participatingContactIds: messageJson.sections[0].participatingContactIds
      };
      return HSRMessageModel.findOneAndUpdate({ id: message.id }, message, { new: true, upsert: true });
    }));
  } finally {
    await mongoose.connection.close();
  }
});