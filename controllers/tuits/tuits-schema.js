import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: String,
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  image:String,

}, {collection: 'tuits'});
export default schema;
