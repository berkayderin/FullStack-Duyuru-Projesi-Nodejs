const mongoose = require('mongoose')

const conn = () => {
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('Veritabanına bağlanıldı.')
		})
		.catch((err) => {
			console.log(`Veritabanına bağlanılamadı: ${err}`)
		})
}

module.exports = conn
