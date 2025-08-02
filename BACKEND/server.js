const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const workoutRoutes = require('./routes/workouts.js');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });