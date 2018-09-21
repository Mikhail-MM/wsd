import React, {Component} from 'react'

import english from '../../../../config/englishText'
import spanish from '../../../../config/spanishText'

class RootBlurb extends Component { 
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
				<img className="root-img" src="./images/desktop/rootcanal.svg" />
				<h2> {verbiage[this.props.lang].procedures.root.h1}</h2>
				<h4> {verbiage[this.props.lang].procedures.root.h2}</h4> 
				<p> {verbiage[this.props.lang].procedures.root.p1} </p>
				<h4> {verbiage[this.props.lang].procedures.root.h3} </h4>
				<p>{verbiage[this.props.lang].procedures.root.p2}</p>
				<h4> {verbiage[this.props.lang].procedures.root.h4} </h4>
				<p> {verbiage[this.props.lang].procedures.root.p3} </p>
			</div>
		)
	}
}

export default RootBlurb