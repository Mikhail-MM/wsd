import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class WhiteBlurb extends Component { 
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
				<h2> {verbiage[this.props.lang].procedures.white.h1} </h2>
					<p> {verbiage[this.props.lang].procedures.white.p1}</p>
				<h4> {verbiage[this.props.lang].procedures.white.h2} </h4>
					<p> {verbiage[this.props.lang].procedures.white.p2}</p> 
				<h4> {verbiage[this.props.lang].procedures.white.h3}</h4>
					<p> {verbiage[this.props.lang].procedures.white.p3}</p>
			</div>
		)
	}
}

export default WhiteBlurb