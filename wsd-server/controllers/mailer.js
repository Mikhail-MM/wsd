const nodemailer = require('nodemailer')

const authpass = require('../auth_config/auth')

nodemailer.createTestAccount((err, account) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			user: "wsdmailernoreply@gmail.com",
			pass: authpass,
		},
	});
	let mailOptions = {
		from: ' "World Smiles Dental" <wsdmailernoreply@gmail.com>',
		to: 'mike.maslyuk@yahoo.com',
		subject: "Your Appointment Confirmation!",
		text: "Hello. We're mailing you to confirm your appointment. Please respond!",	
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error); 
		}
		console.log('Message sent: %s', info.messageId);

	});
});

module.exports.sendContactNotification = async (req, res, next) => {
	console.log(req.body)
	console.log("Sending state back to front")
	res.json(req.body)
}

module.exports.sendAppointmentNote = async (req, res, next) => {
	console.log(req.body)
	console.log("Sending state back to front")
	res.json(req.body)
}
