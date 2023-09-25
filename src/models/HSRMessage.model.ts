import mongoose, { Schema } from 'mongoose';

const messageTypes = ["Text", "Image", "Sticker"];
const senderTypes = ["NPC", "Player", "PlayerAuto", "System"];
const chatTypes = ["Characters", "Others", "Group Chats"];

const HSRMessageSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  contacts: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    signature: { type: String },
    type: { type: String, enum: chatTypes, required: true }
  },
  relatedMessages: { type: [Number], default: [] },
  startingMessageId: { type: Number },
  messages: [{
    id: { type: Number, required: true },
    type: { type: String, enum: messageTypes, required: true },
    sender: { type: String, enum: senderTypes, required: true },
    senderContactId: { type: Number },
    text: { type: String, required: true },
    image: { type: String },
    next: { type: [Number], default: [] }
  }],
  participatingContactIds: { type: [Number], required: true }
});

export default mongoose.model('HSRMessage', HSRMessageSchema)
export type HSRMessageDocument = typeof HSRMessageSchema & Document;