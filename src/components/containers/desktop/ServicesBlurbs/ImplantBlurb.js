import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class ImplantBlurb extends Component { 
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
				<h2>{verbiage[this.props.lang].procedures.implant.h1}</h2>
				<p>{verbiage[this.props.lang].procedures.implant.p1}</p>
				<p>{verbiage[this.props.lang].procedures.implant.p2}</p>
				<p>{verbiage[this.props.lang].procedures.implant.p3}</p>
				<img className="implant-img" src="./images/desktop/implant.jpg" />
				<h2>{verbiage[this.props.lang].procedures.implant.h2}</h2>
				<p>{verbiage[this.props.lang].procedures.implant.p4}</p>
			</div>
		)
	}
}

export default ImplantBlurb