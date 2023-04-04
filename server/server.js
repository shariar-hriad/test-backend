const express = require('express')
const cors = require('cors')
const connectDB = require('./config/connDB.js')
const userRoute = require('./routes/user.js')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use('/api/v1', userRoute)

// promise syntax
connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is started in port: 3000')
        })
    })
    .catch((err) => console.log(err))
