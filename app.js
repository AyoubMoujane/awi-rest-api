const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions))

// Bodyparser middleware

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

//simple route
app.get('/', (req, res) => {
    res.json({message:"Welcome to AWI App"})
})
// routes
require('./routes/auth')(app)
require('./routes/user')(app)



// Connect to MongoDB
const dbConfig = require('./config/db').mongoURI
const db = require("./models")

mongoose.connect(dbConfig,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => {
        console.log('Successfully connected')
    })
    .catch((error) => {
        console.log("Problems with connection")
        console.error(error)
    })

module.exports = app

