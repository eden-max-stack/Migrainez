const db = require('../config/db');

const bookAppointment = async (req, res) => {
    console.log("Request Body: ", req.body);

    const { name, phNo, email, message } = req.body;

    if ( !name || !phNo || !email || !message ) return res.status(400).json({ 'message': 'All fields are to be filled.'});

    try {
        const [rows] = await db.execute('SELECT * FROM appointments WHERE email = ?', [email]);
        if (rows.length > 0) return res.status(409).json({ 'message': 'You have already booked an appointment. '}); // conflict
        
        // insert new appointment into the db
        const result = await db.execute(
            'INSERT INTO appointments (name, ph, email, message) VALUES (?, ?, ?, ?)',
            [name, phNo, email, message]
        );

        console.log('Appointment Booked with ID: ', result[0].insertId); // log id of newly created appointment
        res.status(201).json({ 'success': 'New Appointment created! '}); // success message
    } catch (err) {
        console.error(err);
        res.status(500).json({ 'message': err.message});

    }
}

module.exports = { bookAppointment }