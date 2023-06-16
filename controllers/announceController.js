const Announce = require('../models/Announce')

const getAddAnnounce = (req, res) => {
	res.render('add-announce')
}

const postAddAnnounce = async (req, res) => {
	console.log('req body: ', req.body)
	try {
		const announce = new Announce({
			name: req.body.name,
			description: req.body.description,
			startDate: req.body.startDate,
			endDate: req.body.endDate
		})

		await announce.save()

		res.render('add-announce', {
			message: 'Duyuru başarıyla oluşturuldu'
		})
	} catch (error) {
		res.render('add-announce', {
			error: 'Duyuru oluşturulamadı'
		})
	}
}

const getDeleteAnnounce = async (req, res) => {

	try {
		await Announce.findByIdAndDelete(req.params.id)
		res.redirect('/home')
	} catch (error) {
		res.render('announces', {
			error: 'Duyuru silinemedi'
		})
	}
}


module.exports = {
	getAddAnnounce,
	postAddAnnounce,
	getDeleteAnnounce
}
