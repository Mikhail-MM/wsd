import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class PreventativeBlurb extends Component { 
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
				<h2>{verbiage[this.props.lang].procedures.prevent.h1}</h2>
				<h4>{verbiage[this.props.lang].procedures.prevent.h2}</h4>
				<p>{verbiage[this.props.lang].procedures.prevent.p1}</p>
				<img className="cavity-dev" src="./images/desktop/cavitydev.svg" />
				<h3>{verbiage[this.props.lang].procedures.prevent.h3} </h3>
				<p>{verbiage[this.props.lang].procedures.prevent.p2}</p>
				<h2>{verbiage[this.props.lang].procedures.prevent.h4}</h2>
				<p>{verbiage[this.props.lang].procedures.prevent.p3}</p>
				<h4>{verbiage[this.props.lang].procedures.prevent.h5} </h4>
				<p>{verbiage[this.props.lang].procedures.prevent.p4}</p>
				<h2>{verbiage[this.props.lang].procedures.prevent.h6}</h2>
				<p>{verbiage[this.props.lang].procedures.prevent.p5}</p>
			</div>
		)
	}
}

export default PreventativeBlurb