// const express = require("express");
// const path = require("path")
import express from "express"
const app = express();
import path from "path"
const PORT = 3000
import routes from "./server/routes/index.js"; 
import { fileURLToPath } from 'url';
import connect from "./server/database/mongodb.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.use('/tapclone/sreelakshmi/ejs/views/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// mongodb connection
await connect();

app.get("/", (req, res) => {
  res.render("ind"); // ind refers to ind.ejs
});

app.get("/gallery", (req, res) => {
  res.render("index", {path: req.path.substring(1)}); // index refers to index.ejs
});
app.get("/about-1.html", (req, res) => {
  res.render("about-1"); 
});
app.get("/blog-single.html", (req, res) => {
  res.render("blog-single"); 
});
app.get("/blog.html", (req, res) => {
  res.render("blog"); 
});
app.get("/careers.html", (req, res) => {
  res.render("careers"); 
});
// app.get("/clients1.html", (req, res) => {
//   const name = 'John'
//   res.render("clients1",{name}); 
// });
app.get("/clients2.html", (req, res) => {
  res.render("clients2"); 
});
app.get("/clients3.html", (req, res) => {
  res.render("clients3"); 
});
app.get("/clients4.html", (req, res) => {
  res.render("clients4"); 
});
app.get("/clients5.html", (req, res) => {
  res.render("clients5"); 
});
app.get("/clients6.html", (req, res) => {
  res.render("clients6"); 
});
app.get("/contact-1.html", (req, res) => {
  res.render("contact-1"); 
});
app.get("/download.html", (req, res) => {
  res.render("download"); 
});
app.get("/innovation.html", (req, res) => {
  res.render("innovation"); 
});
app.get("/mission.html", (req, res) => {
  res.render("mission"); 
});
app.get("/product-1.html", (req, res) => {
  res.render("product-1"); 
});
app.get("/product-2.html", (req, res) => {
  res.render("product-2"); 
});
app.get("/product-3.html", (req, res) => {
  res.render("product-3"); 
});
app.get("/product-4.html", (req, res) => {
  res.render("product-4"); 
});
app.get("/product-5.html", (req, res) => {
  res.render("product-5"); 
});
app.get("/product-6.html", (req, res) => {
  res.render("product-6"); 
});
app.get("/product-7.html", (req, res) => {
  res.render("product-7"); 
});
app.get("/product-8.html", (req, res) => {
  res.render("product-8"); 
});
app.get("/product-9.html", (req, res) => {
  res.render("product-9"); 
});
app.get("/services-1.html", (req, res) => {
  res.render("services-1"); 
});
app.get("/services-2.html", (req, res) => {
  res.render("services-2"); 
});
app.get("/services-3.html", (req, res) => {
  res.render("services-3"); 
});
app.get("/services-4.html", (req, res) => {
  res.render("services-4"); 
});
app.get("/services-5.html", (req, res) => {
  res.render("services-5"); 
});
app.get("/services-6.html", (req, res) => {
  res.render("services-6"); 
});
app.get("/services-7.html", (req, res) => {
  res.render("services-7"); 
});
app.get("/services-8.html", (req, res) => {
  res.render("services-8"); 
});
app.get("/services.html", (req, res) => {
  res.render("services"); 
});
app.get("/services-list.html", (req, res) => {
  res.render("services-list"); 
});
app.get("/technology.html", (req, res) => {
  res.render("technology.html"); 
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});