import { Schema, Model, model } from 'mongoose';

export interface User {
  name: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  hobbies: [
    {
      ref: 'Hobby',
      type: Schema.Types.ObjectId,
    },
  ],
});

export const user: Model<User> = model('User', UserSchema);
