const express = require('express');

console.log("Initializing Application")
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./models/config');

const mailer = require('./controllers/mailer')
const smsDaemon = require('./controllers/sms')

const app = express();
const router = express.Router()

if(app.get('env') === 'development') var dev = true;
if (dev) app.use(logger('dev'));
if(app.get('env') === 'production') {
	return
	// Init script can be built to instantiate first Admin
};

app.use(bodyParser.json());

app.use('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, x-access-token, x-mongo-key, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

app.use(express.static(path.join(__dirname, '/../build')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../build/index.html'))
})

	// Routes //

	router.route('/mailer/messenger')
		.post(mailer.sendContactNotification);
	router.route('/mailer/appt')
		.post(mailer.sendAppointmentNote);
	router.route('/sms')
		.post(smsDaemon.sendSMS);

			app.use('/', router);

	//	Error Handling Middleware	//
	///		404 Handler			  ///

		app.use((req, res, next) => {
			var err = new Error("Response Status: 404; Page Not Found")
			err.status = 404
			next(err);
		})

	//	Development Error Handler //

		if (dev) {
			app.use((err, req, res, next) => {
				
				console.log(err);
				
				res.status(err.status || 500).send();
		});
		}

//	Production Error Handler //
		app.use((err, req, res, next) => {
			res.status(err.status || 500).send();
		});

			const PORT = ((process.env.PORT) || (5681))
			const server = app.listen(PORT);
			console.log("Server listening on port", PORT)
				
				module.exports = app;