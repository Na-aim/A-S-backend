require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database American-sterns'))

app.use(express.json())

const usersRouter = require('./app/routes/users.routes.js')
app.use('/users', usersRouter)
const productsRouter = require('./app/routes/products.routes.js')
app.use('/products', productsRouter)


// For testing
app.get('/', (req, res) => {
    res.json("Hello")
})

app.listen(process.env.PORT || 3000, () => console.log('Server Started'))