import { Router } from "express";
// import Transaction from "../models/Transaction.js";
// import passport from "passport";
import * as StarHotels from "../controller/StarHotels.js";

const router = Router();

router.get("/", StarHotels.index);
router.post("/", StarHotels.ImageUpload);
router.delete("/:id", StarHotels.destroy);

export default router;