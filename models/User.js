const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true // createdAt, updatedAt oluşturur
	}
)

userSchema.pre('save', async function (next) {
	try {
		const salt = await bcrypt.genSalt(10)
		this.password = await bcrypt.hash(this.password, salt)
		console.log('password is hashed')
		next()
	} catch (error) {
		console.log(error)
		return next(error)
	}
})

userSchema.methods.comparePassword = async function (candidatePassword) {
	try {
		return await bcrypt.compare(candidatePassword, this.password)
	} catch (error) {
		throw error
	}
}

module.exports = mongoose.model('User', userSchema)
