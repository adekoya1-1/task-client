const express = require("express");
const router = express.Router();
const { getAllTasks, getTask, deleteTask, createTasks, updateTask } = require("../controller/taskController")

router.route("/").get(getAllTasks).post(createTasks)
router.route("/:taskId").patch(updateTask).delete(deleteTask).get(getTask)



module.exports = router