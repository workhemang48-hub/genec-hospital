const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getAllAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/", bookAppointment);
router.get("/", getAllAppointments);
router.patch("/:id", updateAppointmentStatus);

module.exports = router;