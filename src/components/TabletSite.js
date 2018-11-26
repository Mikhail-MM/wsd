import React, {Component} from 'react'
import Slider from 'react-slick'
import smoothscroll from 'smoothscroll-polyfill';

import english from '../config/englishText'
import spanish from '../config/spanishText'

import AppointmentForm from './containers/desktop/AppointmentForm'
import ContactForm from './containers/desktop/ContactForm'
import ServicesList from './containers/ServicesList'

import PreventativeBlurb from './containers/desktop/ServicesBlurbs/PreventativeBlurb'
import GeneralBlurb from './containers/desktop/ServicesBlurbs/GeneralBlurb'
import PerioBlurb from './containers/desktop/ServicesBlurbs/PerioBlurb'
import FillingsBlurb from './containers/desktop/ServicesBlurbs/FillingsBlurb'
import OrthoBlurb from './containers/desktop/ServicesBlurbs/OrthoBlurb'
import ExtractionsBlurb from './containers/desktop/ServicesBlurbs/ExtractionsBlurb'
import RootBlurb from './containers/desktop/ServicesBlurbs/RootBlurb'
import CrownBlurb from './containers/desktop/ServicesBlurbs/CrownBlurb'
import ImplantBlurb from './containers/desktop/ServicesBlurbs/ImplantBlurb'
import WhiteBlurb from './containers/desktop/ServicesBlurbs/WhiteBlurb'

import BeforeAfterSlider from './containers/desktop/BeforeAfterSlider'

smoothscroll.polyfill();


class TabletSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topOfPage: true,
			interactiveMenuState: "family",
			screenCategory: "appointment"
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.setMenuState = this.setMenuState.bind(this);
		this.interactiveRef = React.createRef();
		this.locationRef = React.createRef();
		this.menuScreenRef = React.createRef();
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}


	setMenuState(key, value, event) {
		if (event) event.preventDefault();
		this.setState({
			[key]: value
		})
	}

	handleScroll(event) {
		let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
		

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

	scrollToRef(ref, instructions, event, arg2) {
		if (event) event.preventDefault()
				
				let pageOffSet = 200
		
				if (this.state.topOfPage) {
					pageOffSet = 200 
				} else if (!this.state.topOfPage) {
					pageOffSet = 150
				}

		/* pageOffSet is Magic Number which is the size of the header - must account for margins of different sizing */
			window.scrollTo({top: (ref.current.offsetTop - pageOffSet), behavior: "smooth"})

		if (instructions === "contact") {
			this.setMenuState("screenCategory", "contact")
		}
		if (instructions === "appointment") {
			this.setMenuState("screenCategory", "appointment")
		}

		if (instructions === "info") {
			this.setMenuState("screenCategory", "info");
			if (arg2) {
				this.setMenuState("interactiveMenuState", arg2)
			}
		}


	}

	render() {

		const classNames = {
			headerExtended: "tablet-nav-logo",
			headerHidden: "tablet-nav-logo tablet-header-hidden",
			jumbotron: "tablet-jumbotron-container",
			jumbotronPull: "tablet-jumbotron-container margin-pull"
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
		return(
			<div className="tablet-wrapper">
			{/*
				<div className="tablet-language-float" onClick={() => this.props.changeLang()}>
						{ this.props.lang === "english" ? <img className="tablet-lang-ico" src="./images/icons/usa.svg" /> : <img className="tablet-lang-ico" src="./images/icons/mexico.svg" /> }
				</div>
			*/}
				<div className="tablet-navigation-wrapper">
					<div className={this.state.topOfPage ? classNames.headerExtended : classNames.headerHidden}>
						WORLD SMILES DENTAL
					</div>
					<nav className="tablet-navigation">
						<a className="tablet-nav-btn" href="" onClick={(event) => this.scrollToRef(this.menuScreenRef, "contact", event)}> 
								<img className="tablet-nav-icon" src="./images/icons/email.svg" /> 
								<h6 className="tablet-nav-header">{verbiage[this.props.lang].menulinks.contact}</h6>
						</a>
						<a className="tablet-nav-btn" href="tel:1-908-400-9318"> 
							<img className="tablet-nav-icon" src="./images/icons/telephone.svg" onClick={(event) => console.log("Handle PhoneCalls!")}/>
							<h6 className="tablet-nav-header">{verbiage[this.props.lang].menulinks.call}</h6>
						</a>
						<a className="tablet-nav-btn" href=""> 
							<img className="tablet-nav-icon" src="./images/icons/placeholder.svg" onClick={(event) => this.scrollToRef(this.locationRef, null, event)}/>
							<h6 className="tablet-nav-header">{verbiage[this.props.lang].menulinks.find}</h6>
						</a>
						<a className="tablet-nav-btn" href=""> 
							<img className="tablet-nav-icon" src="./images/icons/examoffer.svg" onClick={(event) => this.scrollToRef(this.menuScreenRef, "appointment", event)}/> 
							<h6 className="tablet-nav-header"> {verbiage[this.props.lang].menulinks.appts} </h6>
						</a>
					</nav>
				</div>


				<div className={this.state.topOfPage ? classNames.jumbotron : classNames.jumbotronPull}>
					{/*<img className="tablet-jumbotron-image" src="./images/desktop/office-jumbo-blur3.jpg" /> */}
				</div>
				<div className="tablet-blurb-container">
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

							<div className="duo-buttons" onClick={(event) => this.scrollToRef(this.interactiveRef, "info", event)}>
								<div className="duo-icon">
									<img src="./images/icons/happytooth.svg" />
								</div>
								<div className="intro-button">
									<div className="tumbler-icon-container">
										{verbiage[this.props.lang].blurb.b3}
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className='tablet-lang-selection' onClick={() => this.props.changeLang()}>
					<div style={{marginRight: '16px'}}>
						{ this.props.lang === "english" ? <img className="tablet-lang-ico" src="./images/icons/usa.svg" /> : <img className="tablet-lang-ico" src="./images/icons/mexico.svg" /> }
					</div>
					<div>
						{ this.props.lang === "english" ? <p> Click to Change Language </p> : <p> Click to Change Language </p> }
					</div>
				</div>
				<div className="tablet-about-container">
					<h3 style={{margin: '42px 0'}}>{verbiage[this.props.lang].about.header}</h3>
						<img className="tablet-reactive-about-img" src="./images/desktop/chair2hires.jpg" />
						
							<p> {verbiage[this.props.lang].about.blurbp1}</p>
							<p> {verbiage[this.props.lang].about.blurbp2}</p>
							<p> {verbiage[this.props.lang].about.blurbp3}</p>
				</div>
				<div className="tablet-interactive-menu-container" ref={this.interactiveRef}>
					<div className="tablet-linkheader-container" >
					<h3 style={{margin: '42px 0'}}> {verbiage[this.props.lang].moreInfo} </h3>
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "family")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabgeneral.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.gen} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabgeneral.svg" />
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "preventative")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabpreventative.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.prev} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabpreventative.svg" />
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "filling")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabfill.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.fill} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabfill.svg" /> 
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "root")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabroot.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.endo} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabroot.svg" /> 
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "implant")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabimplant.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.implant} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabimplant.svg" />
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "crowns")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/crownz.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.crown} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/crownz.svg" /> 
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "ortho")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/tabortho.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.ortho} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/tabortho.svg" /> 
							</div> 
							<div 
								className="tablet-menu-link" 
								onClick={(event) => this.scrollToRef(this.menuScreenRef, "info", event, "whitening")}> 
									<img  className="tablet-menu-link-icon" src="./images/icons/white.svg" /> 
									<span className="tablet-link-clickable" > {verbiage[this.props.lang].tablet.proc.white} </span>
									<img  className="tablet-menu-link-icon" src="./images/icons/white.svg" /> 
							</div> 
				</div>
				<div className="tablet-interactive-menu-screen"ref={this.menuScreenRef}>
						{ this.state.screenCategory === "appointment" && <AppointmentForm size="tablet" lang={this.props.lang} />}
						{ this.state.screenCategory === "contact" && <ContactForm size="tablet" lang={this.props.lang} />}
						{ this.state.screenCategory === "info" && 
							<div className="desktop-procedure-component-content tablet-procedure-component-content">
									{this.state.interactiveMenuState === "preventative" && <PreventativeBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "family" && <GeneralBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "filling" && <FillingsBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "ortho" && <OrthoBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "implant" && <ImplantBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "perio" && <PerioBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "wisdom" && <ExtractionsBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "root" && <RootBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "crowns" && <CrownBlurb size="tablet" lang={this.props.lang} />}
									{this.state.interactiveMenuState === "whitening" && <WhiteBlurb size="tablet" lang={this.props.lang} />}
							</div> }
				</div>
				<div className="tablet-offers-container" >
						<h2 style={{marginBottom: 24}}>{verbiage[this.props.lang].tablet.off}</h2>
						<div className="tablet-offers-inner-container">
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
										<div className="offer-blurb">
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
				<div className="tablet-offers-container before-after" >
								<div>
									<h1> {verbiage[this.props.lang].beforeafter.header}</h1>
									<p> {verbiage[this.props.lang].beforeafter.blurb} </p>
								</div>
								<div className="desktop-before-after-background-container">
									<img src="./images/desktop/beforeafter-background.jpg" />
								</div>
										Click to see Ortho/Reconstructive
					<div className="tablet-offers-row">
						<BeforeAfterSlider />
					</div>
				</div>
				<div className="tablet-location-container" ref={this.locationRef}> 

					<div className="tablet-google-map-container">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.3507083904822!2d-117.88812267649342!3d33.716674258380394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd8db02393e99%3A0x44432cdea3b7c998!2sWorld+Smile+Dental!5e0!3m2!1sen!2sus!4v1523640707226" width="300" height="200" frameborder="0" allowfullscreen></iframe>
					</div>
						<div className="tablet-location-information">
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
		</div>
		)
	}

}

export default TabletSite