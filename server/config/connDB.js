const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.mgna4l6.mongodb.net/course-builder', {
            useNewUrlParser: true,
        })
        console.log('Database connection successful')
    } catch (error) {
        console.log('Database connection failed')
    }
}

module.exports = connectDB
