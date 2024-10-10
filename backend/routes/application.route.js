import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
const router = express.Router();

router.route("https://mainjobportal.onrender.com/apply/:id").get(isAuthenticated, applyJob);
router.route("https://mainjobportal.onrender.com/get").get(isAuthenticated, getAppliedJobs);
router.route("https://mainjobportal.onrender.com/:id/applicants").get(isAuthenticated, getApplicants);
router.route("https://mainjobportal.onrender.com/status/:id/update").post(isAuthenticated, updateStatus);
 

export default router;

