import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class FamilyBlurb extends Component { 
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
					{verbiage[this.props.lang].catsidebar.general} 
				</h2>
				
				<img className="general-image" src="./images/desktop/generaldent.jpg" />
				
				<div> 
					<p> 
						{verbiage[this.props.lang].procedures.general.p1}
					</p>
				</div>
				
				<h4> 
					{verbiage[this.props.lang].procedures.general.h1} 
				</h4>
				
				<div> 
					<p> 
						{verbiage[this.props.lang].procedures.general.pe} 
					</p>
				</div>
					
				
				
				<h4> 
					{verbiage[this.props.lang].procedures.general.h5}
				</h4>
				
				<p> 
					{verbiage[this.props.lang].procedures.general.p5}
				</p>

				<img className="pain-img" src="./images/desktop/pain.jpg" />
				
				<h4>
					{verbiage[this.props.lang].procedures.general.h6}
				</h4> 
					
				<p>
					{verbiage[this.props.lang].procedures.general.p6}
				</p>
				<h4> 
					{verbiage[this.props.lang].procedures.general.h4}
				</h4>
				
				<div>
					<p>
						{verbiage[this.props.lang].procedures.general.p4} 
					</p>
				</div>
			</div>
		)
	}
}

export default FamilyBlurb