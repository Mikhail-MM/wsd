import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class FillingsBlurb extends Component { 
	constructor(props) {
		super(props)
	}


	render() {
		
		const verbiage = {
			english: english,
			spanish: spanish
		}

		return(
			<div> 
				<h2> {verbiage[this.props.lang].procedures.filling.h1} </h2>
				<p> {verbiage[this.props.lang].procedures.filling.p1}</p>
				<h2> {verbiage[this.props.lang].procedures.filling.h2} </h2>
				<p> {verbiage[this.props.lang].procedures.filling.p2}</p>
				<h2> {verbiage[this.props.lang].procedures.filling.h3}</h2>
				<p> {verbiage[this.props.lang].procedures.filling.p3} </p>
				<p> {verbiage[this.props.lang].procedures.filling.p4} </p>	
				<p> {verbiage[this.props.lang].procedures.filling.p5} </p>
			</div>
		)
	}
}

export default FillingsBlurb