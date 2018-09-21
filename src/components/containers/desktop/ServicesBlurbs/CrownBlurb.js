import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class CrownBlurb extends Component { 
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

				<h2> 
					{verbiage[this.props.lang].procedures.crown.h1}
				</h2>		
					<img className="crown-img" src="./images/desktop/crownshow.jpg" />	
				<h4>
					{verbiage[this.props.lang].procedures.crown.h2}
				</h4>
				<p> 
					{verbiage[this.props.lang].procedures.crown.p1}
				</p> 
				<img className="crown-img2" src="./images/desktop/crown.jpg" />
				<h4> 
					{verbiage[this.props.lang].procedures.crown.h3} 
				</h4>
				<p> 
					{verbiage[this.props.lang].procedures.crown.p2}
				</p>
				
				<h4> 
					{verbiage[this.props.lang].procedures.crown.h4}
				</h4>
				
				<p>
					{verbiage[this.props.lang].procedures.crown.p3}
				</p>

			</div>
		)
	}
}

export default CrownBlurb