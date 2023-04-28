import mongoose, { Schema } from 'mongoose';

const HSRGameSchema = new Schema({
  answer: { type: Schema.Types.ObjectId, ref: "HSRCharacter", required: true }
});

export default mongoose.model('HSRGame', HSRGameSchema)