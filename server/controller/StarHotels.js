//work pending===================================
//1. index


import multer from "multer";
import ImageModel from "../models/image.model.js";
import http from 'http'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import imageModel from "../models/image.model.js";



const Storage = multer.diskStorage({
  destination: "/tapclone/sreelakshmi/ejs/public/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");



export const index = async (req, res) => {
  // to find only one image #######################################
    // try {
    //   console.log(req.params.id);
    //   const image = await ImageModel.findById(req.params.id);
    //   if (!image) {
    //     return res.status(404).send("Image not found");
    //   }
    //   res.set("Content-Type", image.image.contentType);
    //   res.send(image.image.data);
    //   console.log(image);
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).send("Server Error");
    // }

    if (req.method === 'GET' && req.url === '/') {
      const imagesDir = ('/tapclone/sreelakshmi/ejs/public/uploads');//path to folder where image is uploaded
      fs.readdir(imagesDir, (err, files) => {
        if (err) {
          console.error(`Error reading directory ${imagesDir}: ${err}`);
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          const images = files.filter(file => {
            const extname = path.extname(file);
            return extname === '.png' || extname === '.jpg' || extname === '.jpeg' || extname === '.gif';
          });
          res.setHeader('Content-Type', 'application/json');
          // res.end(JSON.stringify(images));
          res.render('clients1', { images: images });
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



