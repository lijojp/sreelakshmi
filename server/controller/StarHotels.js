//work pending===================================
//1. index


import multer from "multer";
import ImageModel from "../models/image.model.js";

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");



export const index = async (req, res) => {
  
  
};

// upload working
export const ImageUpload = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });
      newImage
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
};

//delete working
export const destroy = async (req, res) => {
  await ImageModel.deleteOne({ _id: req.params.id });
  res.json({ message: "image deleated" });
};



