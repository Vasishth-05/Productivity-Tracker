//Logic for each route

const express = require('express')
const asyncHandler = require('express-async-handler');

//@desc Creat a new task
//@route POST /api/task
//@acces PUBLIC
const createTasks = asyncHandler ( async (req,res) => {
    res.json({
        message : 'this is a post request'
    })
})

//@desc Get the posted task
//@route GET /api/task
//@acces PUBLIC
const getAllTasks = asyncHandler ( async (req,res) => {
    "this is not a simple task which"
    res.json({
        message : 'this is a get request'
    })
})

//@desc Get all task
//@route GET /api/task/:id
//@acces PUBLIC
const getTaskById = asyncHandler ( async (req,res) => {
    res.json({
        message : 'this is a GETALL request'
    })
    
})

//@desc Update tasks
//@route PUT /api/task/:id
//@acces PUBLIC
const updateTask = asyncHandler ( async (req,res) => {
    res.json({
        message : 'this is a update request'
    })
})

//@desc deletes a task
//@route DELETE /api/task/:id
//@acces PUBLIC
const deleteTasks = asyncHandler ( async (req,res) => {
    res.json({
        message : 'this is a delete request'
    })
})

module.exports = {
    createTasks,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTasks
}