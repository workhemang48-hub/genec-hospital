const Appointment = require("../models/appointmentModel");

const bookAppointment = async (req, res) => {
  try {
    const { fullName, email, phone, city, service, date, time, message } = req.body;
    const appointment = new Appointment({ fullName, email, phone, city, service, date, time, message });
    await appointment.save();
    res.status(201).json({ success: true, message: "Appointment booked successfully!", data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "confirmed", "cancelled"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status value" });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { bookAppointment, getAllAppointments, updateAppointmentStatus };