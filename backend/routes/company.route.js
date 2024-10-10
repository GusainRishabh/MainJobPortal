import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("https://mainjobportal.onrender.com/register").post(isAuthenticated,registerCompany);
router.route("https://mainjobportal.onrender.com/get").get(isAuthenticated,getCompany);
router.route("https://mainjobportal.onrender.com/get/:id").get(isAuthenticated,getCompanyById);
router.route("https://mainjobportal.onrender.com/update/:id").put(isAuthenticated,singleUpload, updateCompany);

export default router;

