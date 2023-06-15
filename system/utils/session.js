const session = require('express-session')

const sessionConfig = {
	secret: 'af1b80b4-fa19-42bc-9f36-b5de499da1e1',
	resave: false, //her istekte sessionu kaydetme
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60
	}
}

module.exports = session(sessionConfig)
