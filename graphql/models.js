import mongoose from 'mongoose';

export const User = mongoose.model('User', {
  username: String,
  name: String,
  surname: String,
  country: String,
  id: String
})