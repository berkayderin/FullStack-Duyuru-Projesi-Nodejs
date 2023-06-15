const { format } = require('date-fns')
const trLocale = require('date-fns/locale/tr')

function FormatDate(date, endDate) {
	return format(new Date(date), endDate ? 'dd MMMM yyyy - HH:mm' : 'dd MMMM yyyy', { locale: trLocale })
}

module.exports = FormatDate
