import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Trip = new Schema(
    {
        country:{ type: String, required: true },
        city: {type: String, required: true },
        location: {type: String, required: true },
        description: { type: String, required: true },
},
{ timestamps: true }
)

export default mongoose.model("Trip", Trip);