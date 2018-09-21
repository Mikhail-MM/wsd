const nodemailer = require('nodemailer')
const moment = require('moment')

const authpass = require('../auth_config/auth')

let transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: "wsdmailernoreply@gmail.com",
		pass: authpass,
	},
});

module.exports.sendContactNotification = async (req, res, next) => {
	let mailOptions = {
		from: ' "World Smiles Dental" <wsdmailernoreply@gmail.com>',
		to: req.body.email,
		subject: "Your Appointment Confirmation!",
		text: `Hello ${req.body.firstName} ${req.body.lastName}, 
		This is an automatic confirmation from World Smiles Dental regarding your correspondence. Your message has been received by our office - We will contact you regarding your concern via your email at ${req.body.email}, or the phone number you gave us: ${req.body.phone}.
		
		World Smiles Dental
		1417 W. Warner Ave Santa Ana, CA 92704
		(714)-879-8118`	
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
		text: `Hello, 
	
This is an automatic confirmation from World Smiles Dental regarding an upcoming appointment for ${req.body.firstName} ${req.body.lastName}. Your request has been received by our office, and we will be expecting your arrival on ${moment(req.body.startDate).format("MMM Do")}. 
If this is your first visit with us, please bring your insurance information. We look forward to seeing you! Thank you.

World Smiles Dental
1417 W. Warner Ave Santa Ana, CA 92704
(714)-879-8118`	
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error); 
		}
		console.log('Message sent: %s', info.messageId);
	});

	let smsOptions = {
		from: ' "World Smiles Dental" <wsdmailernoreply@gmail.com>',
		to: '9084009318@txt.att.net',
		subject: "New Appointment",
		text: `Patient Name: ${req.body.firstName} ${req.body.lastName}
Email: ${req.body.email}
Phone: ${req.body.phone}
Requested Date: ${moment(req.body.startDate).format("MMM Do")}
Requested Time: ${req.body.time}`	
	}
	transporter.sendMail(smsOptions, (error, info) => {
		if (error) {
			return console.log(error); 
		}
		console.log('Message sent: %s', info.messageId);
	});
	res.json(req.body)
}
