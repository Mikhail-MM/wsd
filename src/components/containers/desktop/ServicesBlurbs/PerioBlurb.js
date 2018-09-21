import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class PerioBlurb extends Component { 
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div> 
				<img className="perio-img" src="./images/desktop/perio.jpg" /> 
				<h2> Periodontic Health </h2> 
				<h4> What to Know About Healthy Gums </h4>
			</div>
		)
	}
}

export default PerioBlurb