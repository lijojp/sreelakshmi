import { Router } from "express";
import * as AdminCareers from "../../controller/AdminCareers.js";
const router = Router();

router.get("/", AdminCareers.index);
router.post("/", AdminCareers.ImageUpload);
router.delete("/:id", AdminCareers.destroy);

export default router;