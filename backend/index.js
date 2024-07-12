const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/todoapp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    try {
        const welcome = 'Welcome to the site'
        res.status(200).json(welcome)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})

//Routes
app.use('/api/todos', todoRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});