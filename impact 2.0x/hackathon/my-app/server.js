const express = require('express');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');

const app = express();
const cookieParser = require('cookie-parser');
const PORT = 8084;
const path = require('path');

app.use(logger);

app.use(credentials);

app.use(cors(corsOptions));

// middleware
app.use(express.json());

app.use(cookieParser());

// routes
app.use('/', require('./routes/home'));
app.use('/book', require('./routes/bookappointment'));
app.use('/migraine', require('./routes/detectmigraine'));

// start listening
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
})