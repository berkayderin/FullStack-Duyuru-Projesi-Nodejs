const Announce = require('../models/Announce')

const getAddAnnounce = (req, res) => {
	res.render('add-announce')
}

const createAnnounce = async (req, res) => {
	console.log('req body create: ', req.body)

	try {
		const announce = await Announce(req.body)
		await announce.save()
		res.status(200).json({
			message: 'Announce created successfully',
			announce
		})
	} catch (error) {
		res.status(500).json({
			message: 'Announce could not be created',
			error
		})
	}
}

const getAllAnnounces = async (req, res) => {
	try {
		const announces = await Announce.find()
		res.json({
			message: 'Announces retrieved successfully',
			announces
		})
	} catch (error) {
		res.status(500).json({
			message: 'Announces could not be retrieved',
			error: error.message
		})
	}
}

module.exports = {
	getAddAnnounce,
	createAnnounce,
	getAllAnnounces
}
