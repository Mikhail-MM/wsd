import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class ExtractionsBlurb extends Component { 
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
				<h2> {verbiage[this.props.lang].procedures.extraction.h1}</h2>
				<h4> {verbiage[this.props.lang].procedures.extraction.h2} </h4>
				<p> {verbiage[this.props.lang].procedures.extraction.p1} </p> 
				<p> {verbiage[this.props.lang].procedures.extraction.p2} </p>
				
				<h4> {verbiage[this.props.lang].procedures.extraction.h3}</h4>
				<p> {verbiage[this.props.lang].procedures.extraction.p3}</p>
				<h2> {verbiage[this.props.lang].procedures.extraction.h4} </h2>
				<h4> {verbiage[this.props.lang].procedures.extraction.h5}</h4>
				<p>{verbiage[this.props.lang].procedures.extraction.p4}</p>
			</div>
		)
	}
}

export default ExtractionsBlurb