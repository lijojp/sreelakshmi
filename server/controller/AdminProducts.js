//work pending===================================
//1.deleting from mongodb not from server
import express from 'express'
import multer from "multer";
import ProductsModel from "../models/products.model.js";
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)
console.log(`${path.resolve(__dirname)}`);
import fs from 'fs'
import * as productHelpers from '../helpers/product-helpers.js';
var router = express.Router();

const Storage = multer.diskStorage({
  destination: "/tapclone/sreelakshmi/ejs/public/uploads/careers",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = 'public/uploads'
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '--' + file.originalname)
  }
})

export const ImageUpload= async (req, res) => {
 const product = multer({ storage: storage })
router.post('/home', product.array('image'), (req, res) => {
  const files = req.files
  const fileName = files.map((file) => {
    return file.filename
  })
  req.body.image = fileName
  productHelpers.addProducts(req.body).then((response) => {
    res.redirect('/admin/home')
  })
})
}



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
          res.render('adminProducts', { images: images });
        }
      });
    } 
    else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  
};

// upload working
// export const ImageUpload = async (req, res) => {
//     console.log(req.body);
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const newImage = new ProductsModel({
//         id:Date.now(),
//         name: req.body.name,
//         image: {
//           data: req.body.imageName,
//           contentType: "image/png",
//         },
//         category: req.body.dropdown
//       });
//       newImage
//         .save()
//         .then(() => res.render("adminProducts")) 
//         .catch((err) => console.log(err));
//     }
//   });
// };

//delete working
export const destroy = async (req, res) => {
  await ProductsModel.deleteOne({ _id: req.params.id });
  res.json({ message: "image deleated" });
};

