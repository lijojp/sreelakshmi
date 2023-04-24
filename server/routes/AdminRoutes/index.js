import { Router } from "express";
import CareersApi from "./CareersApi.js"
import LoginApi from "./LoginApi.js"
import ProductsApi from "./ProductsApi.js"
const router = Router();

router.use("/", LoginApi);
router.use("/home", ProductsApi);
router.use("/Careers", CareersApi);

export default router;