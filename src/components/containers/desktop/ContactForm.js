import React, {Component} from 'react'

import english from '../../../config/englishText'
import spanish from '../../../config/spanishText'

// Datepicker Dependencies

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';


class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: moment(),
			firstName: "First Name",
			lastName: "Last Name",
			phone: "eg. 908-400-9312",
			email: "eg. john@farm.com",
			reason: "Confirming Appointment..."
		}
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleDateChange(date) {
		this.setState({
			startDate: date
		});
	}

	handleChange(input, value) {
		this.setState({
			[input]: value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log("Submitting form with following state:")
		console.log(this.state)
		// handle form validation
		return fetch("/mailer/messenger", {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(this.state),
		})
		.then(response => response.ok ? response.json() : console.log(response.statusText))
		.then(json => console.log(json))
		.catch(err => console.log(err))
	}

	render() {
			const verbiage = {
			english: english,
			spanish: spanish
		}

		if (this.props.size === "desktop") return (

		<div className="desktop-procedure-list-form-component">

						<div className="desktop-appointments-companion-container">
							<div className="contact-form-image-container">
								<img src=".././images/desktop/contact-resized.jpg" />
							</div>
						</div>

		<div className="desktop-form-container">
		<h1> {verbiage[this.props.lang].form.contact} </h1>

		

				<form onSubmit={(event) => this.handleSubmit(event)}>
					<div className="desktop-form-layout">
						<label>
							{verbiage[this.props.lang].form.first}
						</label>
								<input type="text" value={this.state.firstName} onChange={(event) => this.handleChange("firstName", event.target.value)} />
						<label> 
							{verbiage[this.props.lang].form.last}
						</label>
							<input type="text" value={this.state.lastName} onChange={(event) => this.handleChange("lastName", event.target.value)} />
						<label>
							{verbiage[this.props.lang].form.phone}
						</label>
							<input type="phone" value={this.state.phone} onChange={(event) => this.handleChange("phone", event.target.value)} />
						
						<label> 
							{verbiage[this.props.lang].form.email}
						</label>
							<input type="email" value={this.state.email} onChange={(event) => this.handleChange("email", event.target.value)} />
						
						
						<label>
							{verbiage[this.props.lang].form.concern}
						</label>
							<input type="text" value={this.state.reason} onChange={(event) => this.handleChange("reason", event.target.value)} />
							
					</div>
						<input type="submit" className="desktop-procedures-selection-button appointment-selection-button" value="Send Message"/>
				</form>
		</div>



		</div>
		)
		else if (this.props.size === "tablet") return (
		<div className="tablet-appointment-container">

						<div className="desktop-appointments-companion-container">
							<div className="contact-form-image-container">
								<img src=".././images/desktop/contact-resized.jpg" />
							</div>
						</div>

		<div className="desktop-form-container">
		<h1> Contact Us </h1>

		

				<form onSubmit={(event) => this.handleSubmit(event)}>
					<div className="desktop-form-layout">
						<label>
							{verbiage[this.props.lang].form.first}
						</label>
								<input type="text" value={this.state.firstName} onChange={(event) => this.handleChange("firstName", event.target.value)} />
						<label> 
							{verbiage[this.props.lang].form.last}
						</label>
							<input type="text" value={this.state.lastName} onChange={(event) => this.handleChange("lastName", event.target.value)} />
						<label>
							{verbiage[this.props.lang].form.phone}
						</label>
							<input type="phone" value={this.state.phone} onChange={(event) => this.handleChange("phone", event.target.value)} />
						
						<label> 
							{verbiage[this.props.lang].form.email}
						</label>
							<input type="email" value={this.state.email} onChange={(event) => this.handleChange("email", event.target.value)} />
						
						
						<label>
							{verbiage[this.props.lang].form.concern}
						</label>
							<input type="text" value={this.state.reason} onChange={(event) => this.handleChange("reason", event.target.value)} />
						
					</div>
					<input type="submit" className="desktop-procedures-selection-button appointment-selection-button" value="Send Message"/>
				</form>
		</div>



		</div>
		)
		else return(<div> Error! Sorry! </div>)
	}

}

export default ContactForm;