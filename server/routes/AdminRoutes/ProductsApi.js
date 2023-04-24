import { Router } from "express";
import * as AdminProducts from "../../controller/AdminProducts.js";
const router = Router();

router.get("/", AdminProducts.index);
router.post("/", AdminProducts.ImageUpload);
router.delete("/:id", AdminProducts.destroy);

export default router;