const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')
const morgan = require('morgan')

const app = express()

var corsOptions = config.corsOptions

app.use(cors(corsOptions))
app.use(morgan("dev"))

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
require('./Application/routes/festival')(app)
require('./Application/routes/jeu')(app)
require('./Application/routes/participant')(app)
require('./Application/routes/zone')(app)
require('./Application/routes/suiviExposant')(app)
require('./Application/routes/reservation')(app)
require('./Application/routes/jeuExpose')(app)
require('./Application/routes/statusExposant')(app)
require('./Application/routes/espaceReserve')(app)
require('./Application/routes/espace')(app)
require('./Application/routes/reservationEspace')(app)


// Connect to MongoDB
const dbAuth = require('./Authentication/config/db').mongoURI
mongoose.connect(dbAuth,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((error) => {
        console.log("Problems with connection")
        console.error(error)
    })


// Connect to AWS Mysql instance
const dbApp = require('./Application/models')


async function connect() {
    try {
        await dbApp.sequelize.sync();
        console.log('Successfully connected to MySql');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect()




module.exports = app

