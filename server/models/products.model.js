import mongoose from "mongoose";

const CareersSchema = mongoose.Schema({
  id: { 
    type: String
  },
  name: {
    type: String,
    // required: true,
  },
  category:{
    type: String
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default new mongoose.model('prodectsModel', CareersSchema)