import mongoose, { Schema } from 'mongoose';

const HSRGameSchema = new Schema({
  classicAnswer: { type: Schema.Types.ObjectId, ref: "HSRCharacter", required: true },
  messagesAnswer: { type: Schema.Types.ObjectId, ref: "HSRMessage", required: true }

}, { timestamps: true });

export default mongoose.model('HSRGame', HSRGameSchema)
export type HSRGameDocument = typeof HSRGameSchema & Document;