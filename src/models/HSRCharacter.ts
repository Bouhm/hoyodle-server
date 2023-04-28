import mongoose, { Document, Schema } from 'mongoose';

const rarities = [4, 5]
const weapons = ["The Abundance", "The Destruction", "The Erudition", "The Harmony", "The Hunt", "The Nihility", "The Preservation"]
const elements = ["Fire", "Ice", "Imaginary", "Lightning", "Physical", "Quantum", "Wind"]
const sexes = ["Female", "Male"]
const factions = ["Astral Express", "Belobog", "Herta Space Station", "Intergalactic Merchant Guild", "Silvermane Guards", "Stellaron Hunters", "Wildfire", "Xianzhou Luofu"]

const HSRCharacterSchema = new Schema({
  name: { type: String, required: true },
  rarity: { type: Number, enum: rarities, required: true },
  weapon: { type: String, enum: weapons, required: true },
  element: { type: String, enum: elements, required: true },
  sex: { type: String, enum: sexes, required: true },
  faction: { type: String, enum: factions, required: true },
});

export default mongoose.model('HSRCharacter', HSRCharacterSchema)
export type HSRCharacterDocument = typeof HSRCharacterSchema & Document;