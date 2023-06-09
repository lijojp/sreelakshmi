import { Router } from "express";
import StarHotelsApi from "./StarHotelsApi.js";
import CareersApi from "./CareersApi.js"
// import AuthApi from "./AuthApi.js";
// import UserApi from "./UserApi.js";
// import passport from "passport";
// import CategoryApi from "./CategoryApi.js"

const router = Router();

// const auth = passport.authenticate("jwt", { session: false })

router.use("/clients1.html", StarHotelsApi);
router.use("/careers.html", CareersApi);
// router.use("/auth", AuthApi);
// router.use("/user", UserApi);
// router.use("/category", auth, CategoryApi)


export default router;