import mongoose from "mongoose";

const CareersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default new mongoose.model('careersModel', CareersSchema)
