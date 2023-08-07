const Tasks = require('../model/task')

// get all tasks
const getAllTasks = async (req, res) => {
    try {
        const task = await Tasks.find()
        res.status(200).json({success: true, task})
    } catch (error) {
        res.json(error)
    }
}

// get task
const getTask = async (req, res) => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findById({ _id: taskId });
        res.status(200).json({ success: true, task });
    } catch (error) {
        res.json(error)
    }
}

// create task
const createTasks = async (req, res) => {
    const { title, description, tags } = req.body
    if (!title || !description || !tags) {
        return res.status(400).json({success: false, message: 'please fill all the input fields'})
    }
    try {
        const task = await Tasks.create({ ...req.body });
        res.status(201).json({success: true, task})
    } catch (error) {
        res.json(error)
    }
}


// update task
const updateTask = async (req, res) => {
    const { taskId } = req.params
    try {
        const task = await Tasks.findByIdAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({ success: true, task })
    } catch (error) {
        res.json(error)
    }
};


// delete task
const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const task = await Tasks.findByIdAndDelete({ _id: taskId })
        res.status(200).json({success: true, task})
    } catch (error) {
        res.json(error)
    }
}



module.exports = {getAllTasks, getTask, deleteTask, createTasks, updateTask }