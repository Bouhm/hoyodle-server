import mongoose, { Document, Schema } from 'mongoose';
import { Path, Element, Sex, Faction } from '../interfaces/Enums';

const rarities = [4, 5]

const HSRCharacterSchema = new Schema({
  name: { type: String, required: true },
  rarity: { type: Number, enum: rarities, required: true },
  weapon: { type: String, enum: Path, required: true },
  element: { type: String, enum: Element, required: true },
  sex: { type: String, enum: Sex, required: true },
  faction: { type: String, enum: Faction, required: true },
});

export default mongoose.model('HSRCharacter', HSRCharacterSchema)
export type HSRCharacterDocument = typeof HSRCharacterSchema & Document;