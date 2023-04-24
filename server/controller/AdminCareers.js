//work pending===================================
//1.deleting from mongodb not from server

import multer from "multer";
import CareersModel from "../models/careers.model.js";
import path from 'path'
import fs from 'fs'

const Storage = multer.diskStorage({
  destination: "/tapclone/sreelakshmi/ejs/public/uploads/careers",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");



export const index = async (req, res) => {
    console.log("admin route");
    if (req.method === 'GET' && req.url === '/') {
      const imagesDir = ('/tapclone/sreelakshmi/ejs/public/uploads/careers');//path to folder where image is uploaded
      fs.readdir(imagesDir, (err, files) => {
        if (err) {
          console.error(`Error reading directory ${imagesDir}: ${err}`);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          const images = files.filter(file => {
            const extname = path.extname(file);
            return extname === '.png' || extname === '.jpg' || extname === '.jpeg' || extname === '.webp';
          });
          res.render('charts-chartjs', { images: images });
        }
      });
    } 
    else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  
};

// upload working
export const ImageUpload = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new CareersModel({
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
  await CareersModel.deleteOne({ _id: req.params.id });
  res.json({ message: "image deleated" });
};


