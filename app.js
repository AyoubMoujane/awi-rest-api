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

const Participant = dbApp.participant
const Contact = dbApp.contact

async function connect(){
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
    Participant.create({
        nomParticipant: "Perrin",
        prenomParticipant: "Pierre",
        editeurSeulement: true
    })
    
    Contact.create({
        nomContact: "Moujane",
        prenomContact: "Ayoub",
        emailContact: "ayoub.moujane@etu.umontpellier.fr",
        rue: "xxx rue xww",
        cp: "34000",
        ville: "Montpellier",
        pays: "France",
        telContact: "0666666666",
        telBureau: "04444444",
        fonctionContact: "cadre",
        estPrincipal: true,
        participant: 1
    })

}



module.exports = app

