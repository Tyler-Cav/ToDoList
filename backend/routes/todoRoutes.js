let express = require('express')
let modelToDo = require('../models/todo')

const router = express.Router()

//Creating new ToDo

router.post('/', async (req, res) => {
    try {
        const toDo = new model({
            text: req.body.text
        })
        await toDo.save()
        res.status(201).json(toDo);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
      }
})

router.get('/', async (req, res) => {
    try {
    const todos = await modelToDo.find()
    res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json({error: err.message})
    }
})