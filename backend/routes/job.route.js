import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("https://mainjobportal.onrender.com/post").post(isAuthenticated, postJob);
router.route("https://mainjobportal.onrender.com/get").get(isAuthenticated, getAllJobs);
router.route("https://mainjobportal.onrender.com/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("https://mainjobportal.onrender.com/get/:id").get(isAuthenticated, getJobById);

export default router;

