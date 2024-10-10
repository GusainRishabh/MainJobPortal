import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("https://mainjobportal.onrender.com/register").post(singleUpload,register);
router.route("https://mainjobportal.onrender.com/login").post(login);
router.route("https://mainjobportal.onrender.com/logout").get(logout);
router.route("https://mainjobportal.onrender.com/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;

