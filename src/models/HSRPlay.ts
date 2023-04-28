import mongoose, { Schema } from 'mongoose';

const HSRPlaySChema = new Schema({
  guesses: { type: Number, required: true },
  game: { type: Schema.Types.ObjectId, ref: "HSRGame", required: true },
});

export default mongoose.model('HSRPlay', HSRPlaySChema)