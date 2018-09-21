import React, {Component} from 'react'

import english from '../../config/englishText'
import spanish from '../../config/spanishText'

import Slider from 'react-slick'

class OffersSliderContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {

	    const settings = {
	      dots: true,
	      arrows: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }

		return(
			<div className="mobile-slider-carousel">
				<h4> Offers </h4>
				<Slider className="mobile-offers-slider" {...settings} >
					
					<div className="slider-card-container">
						<div className="slider-card">
							<div className="card-image-container">
								<img src="./images/mobile/offer-1-cleaning.jpg" />
							</div>
							<div className="card-header">
								Free Cleaning and Exam
							</div>
							<div className="card-verbiage">
								<p> Come in for a free check-up or second opinion! Our doctors will take a look at your teeth completely free of charge.</p>
							</div>
						</div>
					</div>
					
					<div className="slider-card-container">
						<div className="slider-card">
							<div className="card-image-container">
								<img src="./images/mobile/offer-1-cleaning.jpg" />
							</div>
							<div className="card-header">
								Free Cleaning and Exam
							</div>
							<div className="card-verbiage">
								<p> Come in for a free check-up or second opinion! Our doctors will take a look at your teeth completely free of charge.</p>
							</div>
						</div>
					</div>

					<div className="slider-card-container">
						<div className="slider-card">
							<div className="card-image-container">
								<img src="./images/mobile/offer-1-cleaning.jpg" />
							</div>
							<div className="card-header">
								Free Cleaning and Exam
							</div>
							<div className="card-verbiage">
								<p> Come in for a free check-up or second opinion! Our doctors will take a look at your teeth completely free of charge.</p>
							</div>
						</div>
					</div>
				
				</Slider>
			</div>
		)
	}
}

export default OffersSliderContainer