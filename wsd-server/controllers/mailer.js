const nodemailer = require('nodemailer')
const moment = require('moment')

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
});

module.exports.sendContactNotification = async (req, res, next) => {
	let mailOptions = {
		from: ' "World Smiles Dental" <wsdmailernoreply@gmail.com>',
		to: req.body.email,
		subject: "Your Appointment Confirmation!",
		text: `Hello ${req.body.firstName} ${req.body.lastName}, This is an automatic confirmation from World Smiles Dental regarding your correspondence. Your message has been received by our office - We will contact you via your email at ${req.body.email}, or the phone number you gave us: ${req.body.phone}.`	
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error); 
		}
		console.log('Message sent: %s', info.messageId);
	});

	res.json(req.body)
}

module.exports.sendAppointmentNote = async (req, res, next) => {
	let mailOptions = {
		from: ' "World Smiles Dental" <wsdmailernoreply@gmail.com>',
		to: req.body.email,
		subject: "Your Appointment Confirmation!",
		text: `Hello, This is an automatic confirmation from World Smiles Dental regarding an upcoming appointment for ${req.body.firstName} ${req.body.lastName}. Your request has been received by our office, and we will be expecting your arrival on ${moment(req.body.startDate).format("MMM Do")}. If this is your first visit with us, please bring your insurance information. We look forward to seeing you! Thank you.`	
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error); 
		}
		console.log('Message sent: %s', info.messageId);
	});


	res.json(req.body)
}
