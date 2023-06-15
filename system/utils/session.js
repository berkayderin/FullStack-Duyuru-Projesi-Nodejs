const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const store = MongoStore.create({
	mongoUrl: process.env.DB_URI,
	collection: 'sessions',
	clientPromise: mongoose.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}),
	client: mongoose.connection
})

const sessionConfig = {
	secret: 'my-secret-key',
	resave: false,
	saveUninitialized: false,
	store: store
}

module.exports = session(sessionConfig)
