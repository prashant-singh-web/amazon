import mongoose, { Document, Schema } from 'mongoose';
import { ObjectId } from "mongoose";



const UserSchema: Schema = new Schema({
 
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  cart: { type: String}
  
});
let USER;
if (mongoose.models.USER) {
  USER = mongoose.model('USER');
} else {
  USER = mongoose.model('USER', UserSchema);
}



export default mongoose.models.USER || mongoose.model('USER', UserSchema);