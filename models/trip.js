import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Trip = new Schema(
  {
    country: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, maxLength: 600, required: true },
    imgURL: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  { timestamps: true }
);

export default mongoose.model('trips', Trip);
