import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class OrthoBlurb extends Component { 
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
				<h2> {verbiage[this.props.lang].procedures.ortho.h1} </h2>
				<p>{verbiage[this.props.lang].procedures.ortho.p1}</p>
				<h4>{verbiage[this.props.lang].procedures.ortho.h2}</h4>
				<p> {verbiage[this.props.lang].procedures.ortho.p2}</p>
				<h4> {verbiage[this.props.lang].procedures.ortho.h3} </h4>
				<p> {verbiage[this.props.lang].procedures.ortho.p3} </p>
				<h4> {verbiage[this.props.lang].procedures.ortho.h4} </h4>
				<p> {verbiage[this.props.lang].procedures.ortho.p4}</p>
			</div>
		)
	}
}

export default OrthoBlurb