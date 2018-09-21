import React, {Component} from 'react'

import english from '../../config/englishText'
import spanish from '../../config/spanishText'

const HeaderContainer = ({props}) => {
	return(
		<div className="mobile-wrapper">
			<header className="mobile-header">
				<div className="mobile-header_overlay">
					<div className="logo">
						WORLD SMILES DENTAL
					</div>
					<div className="mobile-header-links-container">
						<a className="mobile-link"> SERVICES </a>
						<a className="mobile-link"> OFFERS </a>
						<a className="mobile-link"> LOCATION </a>
						<div className="mobile-header-contacts-container">
							<div className="mobile-header-phone">
								Phone: 714-323-1923
							</div>
							<div className="mobile-header-address">
								Loc: 1417 W. Warner Ave
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="mobile-jumbotron-container">
				<img className="mobile-header-image" src={'./images/mobile/lobby.jpg'} />
				<div className="jumbotron-offer">
					Free Exam & Consultation!
				</div>
				<div className="appointment-button">
					Book Appointment
				</div>
			</div>
		</div>
	)
}

export default HeaderContainer
