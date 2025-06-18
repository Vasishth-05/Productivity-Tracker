// Use Express
// Connect to DB
// Use routes: /api/tasks → taskRoutes

const express = require('express');
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

const app = express();

app.use(express.json());

app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(port , () => {
    console.log(`Server is running on port : ${port}`);
    
})