import React, {Component} from 'react'

import english from '../config/englishText'
import spanish from '../config/spanishText'

import HeaderContainer from './containers/HeaderContainer'
import AboutContainer from './containers/AboutContainer'
import OffersSliderContainer from './containers/TreatmentSliderContainer'
import ServicesList from './containers/ServicesList'
import FooterContainer from './containers/FooterContainer'
import BeforeAfterSlider from './containers/BeforeAfterSlider'

class MobileSite extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="mobile-wrapper">
				<HeaderContainer {...this.props} />
				<AboutContainer {...this.props} />
				<OffersSliderContainer {...this.props} />
				<ServicesList {...this.props} />
				<BeforeAfterSlider {...this.props} />
				<h3> Location </h3>
				<div className="map-container">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.3507083904822!2d-117.88812267649342!3d33.716674258380394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd8db02393e99%3A0x44432cdea3b7c998!2sWorld+Smile+Dental!5e0!3m2!1sen!2sus!4v1523640707226" width="450" height="300" frameborder="0" allowfullscreen></iframe>
				</div>
				<FooterContainer {...this.props} />
			</div>
		)
	}

}

export default MobileSite