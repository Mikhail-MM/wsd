import React, {Component} from 'react'

import english from '../../../config/englishText'
import spanish from '../../../config/spanishText'

// Datepicker Dependencies

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';


class AppointmentForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: moment(),
			firstName: "First Name",
			lastName: "Last Name",
			phone: "eg. 908-400-9312",
			email: "eg. john@farm.com",
			reason: "Your reason for visiting (eg. Toothache, Pain, Returning for Crown Installation, etc...)"
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
		
		return fetch("/mailer/appt", {
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
		
		<div className="desktop-form-container">
		<h1> {verbiage[this.props.lang].form.appheader} </h1>

		

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
							{verbiage[this.props.lang].form.availability}
						</label>
								<DatePicker
									selected={this.state.startDate}
									onChange={this.handleDateChange} 
									/>
						
						<label>
							{verbiage[this.props.lang].form.time}
						</label>
							<input type="text" value={this.state.time} onChange={(event) => this.handleChange("time", event.target.value)} />
						
						<label>
							{verbiage[this.props.lang].form.reason}
						</label>
							<input type="text" value={this.state.reason} onChange={(event) => this.handleChange("reason", event.target.value)} />
						<h4>Let us know about your upcoming visit</h4>
						<p> We are always open and accepting new patients. Please let us know about your upcoming visit. </p>
						<input type="submit" className="desktop-procedures-selection-button appointment-selection-button" value="Make Appointment"/>
					</div>
				</form>
		</div>

						<div className="desktop-appointments-companion-container">
							<div className="appointment-form-image-container">
								<img src=".././images/desktop/appointment3.jpg" />
							</div>
							<div className="desktop-form-contact-blurb">
								<div className="desktop-form-contact-inner">
									<h5> Telephone </h5>
									<p> 714-213-1239 </p>
								</div>
								<div className="desktop-form-contact-inner">
									<h5> Hours </h5>
									<p> Monday: Closed </p>
									<p> Tue - Sat : 11AM - 7PM </p>
									<p> Sun : 11AM - 5 PM </p>
								</div>
								<div className="desktop-form-contact-inner">
									<h5> Address </h5>
									<p> 1417 West Warner Ave. </p>
								</div>
							</div>
						</div>



		</div>
		)
		else if (this.props.size === "tablet") return (
		<div className="tablet-appointment-container longform">
		
			<div className="desktop-appointments-companion-container">
				<h1 style={{color:"black"}}> {verbiage[this.props.lang].form.appheader} </h1>
				
				<div className="appointment-form-image-container">
					<img src=".././images/desktop/appointment3.jpg" />
				</div>
			</div>

		<div className="desktop-form-container">
		
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
						{verbiage[this.props.lang].form.availability}
					</label>
							<DatePicker
								selected={this.state.startDate}
								onChange={this.handleDateChange} 
							/>
						
					<label>
						{verbiage[this.props.lang].form.time}
					</label>
						<input type="text" value={this.state.time} onChange={(event) => this.handleChange("time", event.target.value)} />
						
					<label>
						{verbiage[this.props.lang].form.reason}
					</label>
						<input type="text" value={this.state.reason} onChange={(event) => this.handleChange("reason", event.target.value)} />
					<h4>Let us know about your upcoming visit</h4>
					<p> We are always open and accepting new patients. Please let us know about your upcoming visit. </p>
					<input type="submit" className="desktop-procedures-selection-button appointment-selection-button" value="Make Appointment"/>
				</div>

				</form>
		</div>

						



		</div>
		)
			else return(<div> Error! Sorry! </div>)
		

	}

}

export default AppointmentForm;