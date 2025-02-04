let express = require('express')
let modelToDo = require('../models/todo')

const router = express.Router()

//Creating new ToDo
router.post('/', async (req, res) => {
    try {
        const toDo = new modelToDo({
            text: req.body.text
        })
        await toDo.save()
        res.status(201).json(toDo);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
      }
})

//Get All Todos
router.get('/', async (req, res) => {
    try {
    const todos = await modelToDo.find()
    res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json({error: err.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const updateTodo = await modelToDo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateTodo)
    } catch (error) {
        res.status(400).json({err: error.message})   
    }
})

// Deleting todo based on ID
router.delete('/:id', async (req, res) => {
    try {
        let todoMessage = await modelToDo.findById(req.params.id)
        await modelToDo.findByIdAndDelete(req.params.id);
        let respondMessage = `Your ${todoMessage.text} task has been removed`
        res.status(200).json({message: respondMessage })
    } catch (error) {
        res.status(400).json({err: error.message})
    }
})


module.exports = router;