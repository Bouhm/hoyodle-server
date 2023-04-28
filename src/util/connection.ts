import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.zyabdvw.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

const connectDb = async () => {
  mongoose.connect(URI, {});
};

export default connectDb;