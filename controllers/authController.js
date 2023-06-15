const User = require('../models/User')

const getRegister = (req, res) => {
	res.render('register')
}

const postRegister = async (req, res) => {
	const { email, password } = req.body
	try {
		//bu emaile sahip başka bir kullanıcı var mı?
		const userCount = await User.countDocuments({ email: email })

		if (userCount > 0) {
			return res.render('register', { error: 'Bu email adresi zaten kayıtlı!' })
		}
		const user = new User({
			email: email,
			password: password
		})

		//email regex kontrolü
		if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
			return res.render('register', { error: 'Lütfen geçerli bir email adresi giriniz!' })
		}

		//password boş kontrolü
		if (password.length < 1) {
			return res.render('register', { error: 'Lütfen bir şifre giriniz!' })
		}

		await user.save()
		res.redirect('/auth/login')
	} catch (error) {
		console.log(error)
		res.render('register', { error: error.message })
	}
}

const getLogin = (req, res) => {
	res.render('login')
}

const postLogin = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email: email })
		if (!user) {
			return res.render('login', { error: 'Böyle bir kullanıcı bulunamadı!' })
		}

		const result = await user.comparePassword(password)
		if (!result) {
			return res.render('login', { error: 'Şifre hatalı!' })
		}

		req.session.user = user
		res.redirect('/home')
	} catch (error) {
		console.log(error)
		res.render('login', { error: error.message })
	}
}

module.exports = {
	getRegister,
	postRegister,
	getLogin,
	postLogin
}
