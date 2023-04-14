// const mongoose = require("mongoose");
import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default new mongoose.model('imageModel', ImageSchema)
