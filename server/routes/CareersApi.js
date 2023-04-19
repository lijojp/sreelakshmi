import { Router } from "express";
// import Transaction from "../models/Transaction.js";
// import passport from "passport";
import * as Careers from "../controller/careers.js";
const router = Router();

router.get("/", Careers.index);
router.post("/", Careers.ImageUpload);
router.delete("/:id", Careers.destroy);

export default router;