import { Router } from "express";
import * as AdminLogin from "../../controller/AdminLogin.js";
const router = Router();

router.get("/", AdminLogin.index);


export default router;