import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import appointmentRoutes from "./routers/appointmentRoutes.js";
import consultationRoutes from "./routers/consultationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/consultations", consultationRoutes);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Doctor Portal running on port ${PORT}`);
});