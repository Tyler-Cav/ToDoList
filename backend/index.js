const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todoapp');
  } catch (error) {
    handleError(error);
  }
}
connectDB()

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', err => {
  logError(err);
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