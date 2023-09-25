import mongoose, { Schema } from 'mongoose';

const HSRPlaySchema = new Schema({
  guesses: { type: Number, required: true, min: 1 },
  game: { type: Schema.Types.ObjectId, ref: "HSRGame", required: true },
  correct: { type: Boolean, required: true }
}, { timestamps: true });

export default mongoose.model('HSRPlay', HSRPlaySchema);
export type HSRPlayDocument = typeof HSRPlaySchema & Document;