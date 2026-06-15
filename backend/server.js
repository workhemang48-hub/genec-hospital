const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://genec-hospital.vercel.app"
  ]
}));
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "City Women's Hospital API is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});