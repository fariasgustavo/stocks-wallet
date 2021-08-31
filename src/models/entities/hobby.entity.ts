import { Schema, Document, Model, model } from 'mongoose';

export interface Hobby {
  experienceLevel: number;
  name: string;
  year: number;
}

const HobbySchema: Schema = new Schema({
  experienceLevel: { type: Number, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
});

export const hobby: Model<Hobby> = model('Hobby', HobbySchema);
