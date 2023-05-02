import mongoose, { Schema } from 'mongoose';

const HSRPlaySChema = new Schema({
  guesses: { type: Number, required: true, min: 1, max: 6 },
  game: { type: Schema.Types.ObjectId, ref: "HSRGame", required: true },
  correct: { type: Boolean, required: true }
});

export default mongoose.model('HSRPlay', HSRPlaySChema);
export type HSRPlayDocument = typeof HSRPlaySChema & Document;