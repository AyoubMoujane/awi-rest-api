const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

var corsOptions = config.corsOptions

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
    res.json({ message: `Welcome to AWI App ${process.env.NODE_ENV}` })
})
// routes
require('./Authentication/routes/auth')(app)
require('./Application/routes/user')(app)



// Connect to MongoDB
const dbConfigAuth = require('./Authentication/config/db').mongoURI
const db = require("./Authentication/models")

mongoose.connect(dbConfigAuth,
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

// Connect to AWS Mysql instance
/*
const dbApp = require("./Application/models");

dbApp.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});
*/

module.exports = app

