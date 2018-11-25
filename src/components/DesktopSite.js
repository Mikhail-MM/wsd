import React, {Component} from 'react'

import english from '../config/englishText'
import spanish from '../config/spanishText'

import Slider from 'react-slick'

import BeforeAfterSlider from './containers/desktop/BeforeAfterSlider'
import CategorySidebar from './containers/desktop/CategorySidebar'
import AppointmentForm from './containers/desktop/AppointmentForm'
import ContactForm from './containers/desktop/ContactForm'

import FloatyPhone from './containers/desktop/Floaty/telephone'
import '../fontStyles.css'

class DesktopSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topOfPage: true,
			interactiveMenuState: "procedures",
			sidebarCategory: "family"
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.setMenuScreen = this.setMenuScreen.bind(this);
		this.scrollToRef = this.scrollToRef.bind(this);
		this.aboutContainerRef = React.createRef();
		this.servicesContainerRef = React.createRef();
		this.interactiveMenuRef = React.createRef();
		this.offersContainerRef = React.createRef();
		this.locationContainerRef = React.createRef();
		this.smileGalleryRef = React.createRef();
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScroll(event) {
		let scrollTop = event.pageY
		

		if (!scrollTop && !!window.chrome && !!window.chrome.webstore) {
			scrollTop = event.path[1].scrollY
		}

		const  isIE = /*@cc_on!@*/false || !!document.documentMode;

		if (!isIE && !!window.StyleMedia) {
			scrollTop = event.view.scrollY
		}
		/*
		if (!scrollTop) {
			scrollTop = event.Screen.screenTop
		}
		*/

		if (scrollTop > 0 && this.state.topOfPage === true) {
			this.setState({
				topOfPage: false
			})
		}

		if (scrollTop === 0 && !this.state.topOfPage) {
			this.setState({
				topOfPage: true
			})
		}

	}

	setMenuScreen(key, category) {
		this.setState({
			[key]: category
		})
	}

	scrollToRef(ref, instructions) {
		/* 100 is Magic Number which is the size of the compressed header */
		window.scrollTo({top: (ref.current.offsetTop - 100), behavior: "smooth"})

		if (instructions === "appointment") {
			this.setMenuScreen("interactiveMenuState", "appointment");
		}

	}

	render() {
		
		const classNames = {
			headerMargins: {
				extended: "desktop-jumbotron-parent",
				contracted: "desktop-jumbotron-parent desktop-pullmargin"
			},
			header: { 
				transparentHeader: "desktop-navigation-wrapper",
				opaqueHeader: "desktop-navigation-wrapper shrunken-header"
			},
			contactBox: {
				visible: "desktop-contactbar-container",
				hidden: "desktop-contactbar-container compressed-header"
			}

		}

		const verbiage = {
			english: english,
			spanish: spanish
		}

		const offerSliderSettings = {
				dots: true,
	      		arrows: false,
	      		infinite: true,
	      		speed: 500,
	      		slidesToShow: 1,
	      		slidesToScroll: 1,
	      		autoplay: true
		}

		const jumbotronSliderSettings = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}

		return(			
			<div className="desktop-wrapper">
				{ /* <FloatyPhone /> */ }
				<div className={this.state.topOfPage === true ? classNames.header.transparentHeader : classNames.header.opaqueHeader}>
					<div className={this.state.topOfPage === true ? classNames.contactBox.visible : classNames.contactBox.hidden}>
						<div className="small-middle">


						<div className="desktop-lang-header-container" onClick={() => this.props.changeLang()}>

							<div className="skinnyheader-icon-container">
								<img src="./images/icons/globe.svg" />
							</div>

								<div className="skinnyheader-icon-container">
								<img src="./images/icons/mexico.svg" />
							</div>

							<div className="skinnyheader-icon-container">
								<img src="./images/icons/usa.svg" />
							</div>

							{`Language: ${ this.props.lang === "english" ? "English" : "Español" }`}
							
							{/* Do some diffing on this.props.lang to set a className "active" to colour one background grey.*/ }
						</div>

						<div className="header-contact-container">
							<div className="contact-segment">
								<div className="skinnyheader-icon-container">
										<img src="./images/icons/telephone.svg" />
								</div>
								<span className="desktop-header-text"> (714) 213-1239 </span>
							</div>
							
							<div className="contact-segment">
								<div className="skinnyheader-icon-container">
									<img src="./images/icons/email.svg"/>
								</div>
								<span className="desktop-header-text"> wsd2017@gmail.com </span>
							</div>

							<div className="contact-segment">
								<div className="skinnyheader-icon-container">
									<img src="./images/icons/placeholder.svg"/>
								</div>
								<span className="desktop-header-text"> 1417 W. Warner Ave, Santa Ana, CA </span>
							</div>
						</div>
						</div>
					</div>
					<div className="desktop-navigation-container">
						<div className="desktop-logo-container">
							WORLD SMILES DENTAL
						</div>
						<div className="desktop-nav-right">
							<nav>
								<div 
									className="desktop-nav-link"
									onClick={(event) => this.scrollToRef(this.aboutContainerRef)}
									> {verbiage[this.props.lang].headerLinks.about} </div>
								<div 
									className="desktop-nav-link"
									onClick={ (event) => this.scrollToRef(this.interactiveMenuRef) }
								> {verbiage[this.props.lang].headerLinks.services} </div>
								<div 
									className="desktop-nav-link"
									onClick={(event) => this.scrollToRef(this.offersContainerRef)}
									> {verbiage[this.props.lang].headerLinks.offers} </div>
								<div 
									className="desktop-nav-link"
									onClick={(event) => this.scrollToRef(this.smileGalleryRef)}
									> {verbiage[this.props.lang].headerLinks.gallery} </div>
								<div 
									className="desktop-nav-link"
									onClick={(event) => this.scrollToRef(this.locationContainerRef)}
									> {verbiage[this.props.lang].headerLinks.location} </div>
							</nav>
							<button 
								className="customButton"
								onClick={(event) => this.scrollToRef(this.interactiveMenuRef, "appointment")}
								> {verbiage[this.props.lang].headerLinks.appointment}
							</button>
						</div>
						
					</div>
				</div>
				
				<div className={this.state.topOfPage ? classNames.headerMargins.extended : classNames.headerMargins.contracted}>
					<div className="desktop-jumbotron-new-slider-container">
						<Slider {...jumbotronSliderSettings}>
							<div className="desktop-jumbotron-container">
								<img src="./images/desktop/office-jumbo-blur3.jpg" />
							</div>
							<div className="desktop-jumbotron-container">
								<img src="./images/desktop/smiles-1.jpg" />
							</div>
							<div className="desktop-jumbotron-container">
								<img src="./images/desktop/smiles-2.jpg" />
							</div>
							<div className="desktop-jumbotron-container">
								<img src="./images/desktop/smiles-4.jpg" />
							</div>
						</Slider>

					</div>

					<div className="desktop-inner-wrapper">
					<div className="desktop-jumbotron-blurb-container"> 
						<div className="desktop-tumbler">
							<h1> Santa Ana </h1>
							<h2> {verbiage[this.props.lang].blurb.h1} </h2>
							<h3 style={{marginBottom: 12}}> {verbiage[this.props.lang].blurb.h2} </h3>
							<h4> 1417 W. Warner Avenue </h4>
							<h4> (714) 213-1239 </h4>
						</div>
						<div className="tumbler-menu"> 
							<div className="duo-buttons">

								<div className="duo-icon">
									<img src="./images/icons/dent.svg" />
								</div>

								<div className="intro-button">
									<div className="tumbler-icon-container">
										{verbiage[this.props.lang].blurb.b1}
									</div>
								</div>

							</div>
							<div className="duo-buttons mid-button">
								
								<div className="duo-icon">
									<img src="./images/icons/guard.svg" />
								</div>

								<div className="intro-button">
									<div className="tumbler-icon-container">
										{verbiage[this.props.lang].blurb.b2}
									</div>
								</div>

							</div>

							<div className="duo-buttons" onClick={ (event) => this.scrollToRef(this.interactiveMenuRef) }>
								<div className="duo-icon">
									<img src="./images/icons/happytooth.svg" />
								</div>
								<div className="intro-button">
									<div className="tumbler-icon-container procedure-button">
										{verbiage[this.props.lang].blurb.b3}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
					<div className="desktop-about-container" ref={this.aboutContainerRef}>
						<div className="desktop-about-inner-container">
							<div className="desktop-about-text-blurb">
								<h3 style={{marginBottom: 12}}>{verbiage[this.props.lang].about.header}</h3>
								<p> {verbiage[this.props.lang].about.blurbp1}</p>
								<p> {verbiage[this.props.lang].about.blurbp2}</p>
							</div>

							<div className="desktop-about-image-container">
													<div className="desktop-jumbotron-new-slider-container">
						<Slider className="this-new-jumbotron" {...jumbotronSliderSettings}>
								<img className="desk-new-jumbo-img" src="./images/desktop/nj1r.jpg" />
								<img className="desk-new-jumbo-img" src="./images/desktop/nj3r.jpg" />
								<img className="desk-new-jumbo-img" src="./images/desktop/nj4r.jpg" />
						</Slider>
						
					</div>
							</div>
						</div>
					</div>

					<div className="desktop-services-image-container" ref={this.servicesContainerRef}>
						<img src="./images/desktop/featured-services.jpg" />
						<div className="desktop-services-wrapper">
							<h1> {verbiage[this.props.lang].services.header}</h1>
							<p>{verbiage[this.props.lang].services.blurb} </p>

							<div className="desktop-services-list-wrapper">
								<div className="desktop-services-list-container">
									<ul>
										<li> {verbiage[this.props.lang].services.list.cleaning} </li>
										<li> {verbiage[this.props.lang].services.list.fillings} </li>
										<li> {verbiage[this.props.lang].services.list.rc} </li>
										<li> {verbiage[this.props.lang].services.list.cc} </li>
									</ul>
								</div>
								<div className="desktop-services-list-container">
									<ul>
										<li> {verbiage[this.props.lang].services.list.braces} </li>
										<li> {verbiage[this.props.lang].services.list.implants} </li>
										<li> {verbiage[this.props.lang].services.list.wisdom} </li>
										<li> {verbiage[this.props.lang].services.list.whitening} </li>
									</ul>
								</div>
							</div>

						</div>
					</div>

					<div className="desktop-procedures-list-container" ref={this.interactiveMenuRef}>
						<div className="desktop-procedures-menu-button-container">
							
							<button 
								className="desktop-procedures-selection-button customButton"
								onClick= { (event) => this.setMenuScreen("interactiveMenuState", "procedures") }
								> 
									{verbiage[this.props.lang].menulinks.services} 
							</button>

							<button 
								className="desktop-procedures-selection-button customButton"
								onClick= { (event) => this.setMenuScreen("interactiveMenuState", "contact") }
								> 
									{verbiage[this.props.lang].menulinks.contact}
							</button>
							
							<button 
								className="desktop-procedures-selection-button customButton"
								onClick= { (event) => this.setMenuScreen("interactiveMenuState", "appointment") }
								> 
									{verbiage[this.props.lang].menulinks.appt}
							</button>

							<button 
							className="desktop-procedures-selection-button customButton"
							onClick= {(event) => this.scrollToRef(this.locationContainerRef)}
							> {verbiage[this.props.lang].menulinks.find} </button>
						</div>
						
							{this.state.interactiveMenuState === "procedures" && <CategorySidebar lang={this.props.lang} changeCategory={this.setMenuScreen} selectedCategory={this.state.sidebarCategory}/>}
							{this.state.interactiveMenuState === "appointment" && <AppointmentForm size={"desktop"} lang={this.props.lang} />}
							{this.state.interactiveMenuState === "contact" && <ContactForm size={"desktop"} lang={this.props.lang} />}
					</div>


					<div className="desktop-offers" ref={this.offersContainerRef}>
						<div className="desktop-offers-inner-container">
							<div className="desktop-offer-slider-container">
								<Slider {...offerSliderSettings}>
									<div className="offer-slide-container" >
										<img className="offer-image" src="./images/desktop/coupon1.jpg" />
										<div className="offer-blurb">
											<div className="offer-icon">
												<img src="./images/icons/examoffer.svg" />
											</div>
											NEW PATIENT OFFER: Free Dental Exam, Checkup, & X-Rays!
										</div>
									</div>
									<div className="offer-slide-container" >
										<img className="offer-image" src="./images/desktop/coupon2.jpg" />
										<div className="offer-blurb offer-blurb-extra-padding">
											<div className="offer-icon">
												<img src="./images/icons/crownoffer.svg" />
											</div>
												Crowns with exact Color Matching <br/> $ 299

										</div>									
									</div>
									<div className="offer-slide-container" >
										<img className="offer-image" src="./images/desktop/coupon3.jpg" />
										<div className="offer-blurb">
											<div className="offer-icon">
												<img src="./images/icons/bracesoffer.svg" />
											</div>
											Braces <br/> $ 2000 Discounted <br/> Start - $ 99 / mo.
										</div>		

									</div>
									<div className="offer-slide-container" >
										<img className="offer-image" src="./images/desktop/coupon4.jpg" />
										<div className="offer-blurb">
										<div className="offer-icon">
											<img src="./images/icons/endooffer.svg" />
										</div>
											Root Canal <br/> $ 199
										</div>										
									</div>
								</Slider>
							</div>
						</div>
					</div>
					<div className="desktop-before-after-container" ref={this.smileGalleryRef}>
						<div className="desktop-before-after-inner-wrapper">
							<div className="desktop-before-after-blurb">
								<div>
								<h1> {verbiage[this.props.lang].beforeafter.header}</h1>
								<p> {verbiage[this.props.lang].beforeafter.blurb} </p>
								</div>
								<div className="desktop-before-after-background-container">
									<img src="./images/desktop/beforeafter-background.jpg" />
								</div>
							</div>
							<div className="desktop-before-after-slider">
								<BeforeAfterSlider />
							</div>
						</div>
					</div>
					<div className="desktop-location-container" ref={this.locationContainerRef}>
						<h1 className="desktop-loc-title"> Our Location </h1>
						<div className="desktop-iframe-container">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.3515292340828!2d-117.88731864378693!3d33.71662823951535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd8db02393e99%3A0x44432cdea3b7c998!2sWorld+Smiles+Dental!5e0!3m2!1sen!2sus!4v1524182547100" width="1180" height="500" frameborder="0" allowfullscreen></iframe>
							<div className="desktop-location-tooltip">
								<h4> {verbiage[this.props.lang].location.hoursheader} </h4>
								<p> Mon: Closed </p>
								<p> Tue: 10am - 7pm </p>
								<p> Wed: 10am - 7pm </p>
								<p> Thr: 10am - 7pm </p>
								<p> Fri: 10am - 7pm </p>
								<p> Sat: 10am - 7pm </p>
								<p> Sun: 10am - 5pm </p>

								<h6> {verbiage[this.props.lang].location.dirheader} </h6>
								<p> {verbiage[this.props.lang].location.directionsblurb} </p>
							</div>

						</div>
					</div>

					<div className="desktop-footer">
					</div>
					<div className="services-container">
					</div>


				
			</div>
		)
	}

}

export default DesktopSite