import express from "express";

import {
  createLab,
  fetchLabResults
} from "../controllers/labController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router = express.Router();

// Create lab request
router.post("/", authMiddleware, createLab);

// Fetch lab results per patient
router.get("/:patientId", authMiddleware, fetchLabResults);

export default router;