import React, {Component} from 'react'

import english from '../../config/englishText'
import spanish from '../../config/spanishText'

import Slider from 'react-slick'

class BeforeAfterSlider extends Component {
	constructor(props) {
		super(props)
	}

	render() {

	    const settings = {
	      dots: true,
	      arrows: false,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }

		return(
			<div className="mobile-before-after-carousel">
				<h4> Before & After </h4>
				<Slider className="before-after-slider" {...settings} >

					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/before-1.jpg" />
						</div>
					</div>
					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/after-1.jpg" />
						</div>
					</div>

					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/before-2.jpg" />
						</div>
					</div>
					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/after-2.jpg" />
						</div>
					</div>

					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/before-3.jpg" />
						</div>
					</div>
					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/after-3.jpg" />
						</div>
					</div>

					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/before-4.jpg" />
						</div>
					</div>
					<div className="before-after-slide-card-container">
						<div className="before-after-card">
							<img src="./images/mobile/after-4.jpg" />
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}

export default BeforeAfterSlider