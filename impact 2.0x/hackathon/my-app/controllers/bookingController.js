const Appointment = require('../models/Appointment'); // Import the model
const express = require('express');
const db = require('../config/db');

db(); //connection made

const bookAppointment = async (req, res) => {
    console.log('Request Body:', req.body);

    const { name, phNo, email, message } = req.body;

    if (!name || !phNo || !email || !message) {
        return res.status(400).json({ message: 'All fields are to be filled.' });
    }

    try {
        // Check if an appointment already exists for this email
        const existingAppointment = await Appointment.findOne({ email });
        if (existingAppointment) {
            return res.status(409).json({ message: 'You have already booked an appointment.' }); // Conflict
        }

        // Create a new appointment
        const newAppointment = new Appointment({ name, phNo, email, message });
        await newAppointment.save();

        console.log('Appointment Booked with ID:', newAppointment._id);
        res.status(201).json({ success: 'New Appointment created!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = { bookAppointment };
