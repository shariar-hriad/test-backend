const User = require('../models/User')
const catchAsyncError = require('../middlewares/catchAsyncError')
const mongoose = require('mongoose')

// GET all user
const getAllUser = catchAsyncError(async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

// GET a single user
const getSingleUser = catchAsyncError(async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such user' })
    }

    const user = await User.findById(id)

    if (!user) {
        res.status(404).json({ error: 'No such user' })
    }

    res.status(200).json(user)
})

// POST create new user
const createNewUser = catchAsyncError(async (req, res) => {
    const { name, email, role, password } = req.body

    const user = await User.create({ name, email, role, password })
    res.status(201).json(user)
})

// UPDATE a user
const updateAUser = catchAsyncError(async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such user found' })
    }

    // update the user
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, { ...req.body })

    if (!updateAUser) {
        res.status(400).json({ error: 'No such user' })
    }

    res.status(200).json(updatedUser)
})

// DELETE a user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(user)
}

module.exports = { getAllUser, createNewUser, updateAUser, deleteUser, getSingleUser }
