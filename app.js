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

const EspaceType = dbApp.espaceType

async function connect() {
    try {
        await dbApp.sequelize.sync();
        console.log('Successfully connected to MySql');
        initial();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect()

function initial() {

    /*
        Facture.create({
            dateEmissionFacture: "2021-06-24",
            datePaiementFacture: "2021-06-24",
            reservation: 3
        })
       */


       EspaceType.create({
           nomEspace: "EDEEDED",
       })

    /*
    Reservation.create({
        dateReservation: "2021-06-24",
        prix: 180.69,
        remise: 25.60,
        factureEnvoye: true,
        facture:1,
        festival:3,
        participantReservation: 2
    })
    */

}



module.exports = app

