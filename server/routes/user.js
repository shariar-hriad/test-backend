const express = require('express')
const { getAllUser, createNewUser, updateAUser, deleteUser, getSingleUser } = require('../controllers/userController')

const router = express.Router()

router.get('/users', getAllUser)

router.get('/user/:id', getSingleUser)

router.post('/create-user', createNewUser)

router.patch('/update-user/:id', updateAUser)

router.delete('/delete-user/:id', deleteUser)

module.exports = router
