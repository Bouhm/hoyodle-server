import mongoose, { Document, Schema } from 'mongoose';

const HSRCharacterSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  rarity: { type: Number, required: true },
  weapon: { type: String, required: true },
  element: { type: String, required: true },
  faction: { type: String, required: true },
});

export default mongoose.model('HSRCharacter', HSRCharacterSchema)
export type HSRCharacterDocument = typeof HSRCharacterSchema & Document;