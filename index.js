const express = require('express')

const app = express()



const bodyParser = require('body-parser')
const cors = require('cors')

var http = require('http').Server(app)

const jwt = require('./helpers/jwt')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors()) 
//app.use(jwt())

//Event Feed
app.use('/events',require('./events/events.controller'))
//app.use('/staff', require('./staff/staff.controller'))
//app.use('/student', require('./student/student.controller'))

const port = 8088
http.listen(port, () => {console.log("Listening on port ",port)})
