import React, {Component} from 'react'

import english from '../../config/englishText'
import spanish from '../../config/spanishText'

const ServicesList = ({props}) => {
	/* Note - Not using custom classes : "cleaning-list-item", custom-icon */
	return(
		<div className="services-list-wrapper">
			
			<div className="services-list-container">
				<ul>
					<li className="cleaning-list-item"> Cleanings </li>
					<li className="custom-icon"> Fillings </li>
					<li> Root Canal </li>
					<li> Crown </li>
					</ul>
			</div>

			<div className="services-list-container">
				<ul>
					<li className="cleaning-list-item"> Braces </li>
					<li className="custom-icon"> Implants </li>
					<li> Wisdom Teeth </li>
					<li> Dentures </li>
					</ul>
			</div>

		</div>
	)
}

export default ServicesList