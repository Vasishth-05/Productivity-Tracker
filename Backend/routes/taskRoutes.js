// all routes related tasks

const express = require('express');
const { createTasks, getAllTasks, getTaskById, updateTask, deleteTasks } = require('../controller/taskController');
const router = express.Router();

router.route('/').post(createTasks).get(getAllTasks)
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTasks);

module.exports = router;