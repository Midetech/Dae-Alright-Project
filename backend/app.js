const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/daeAlright')

mongoose.connection.once('open', () => console.log('Mongoose is connected to backend'))

const vendorRouter = require('./route/vendor')

app.use('/vendor', vendorRouter)


app.listen(port, () => {
    console.log(`Your application is live on port: ${port}`)
})