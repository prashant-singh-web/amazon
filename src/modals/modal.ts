import mongoose, { Document, Schema } from 'mongoose';



const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  fname: { type: String, required: true },
  
});
if (process.env.NODE_ENV !== 'production') {
  delete (mongoose.connection.models as any).Item;
}
const Item = mongoose.model('Item', UserSchema);


export default mongoose.models.Item || mongoose.model('Item', UserSchema);
