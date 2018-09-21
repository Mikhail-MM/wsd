import React, {Component} from 'react'

import english from '../../../config/englishText'
import spanish from '../../../config/spanishText'

import PreventativeBlurb from './ServicesBlurbs/PreventativeBlurb'
import GeneralBlurb from './ServicesBlurbs/GeneralBlurb'
import PerioBlurb from './ServicesBlurbs/PerioBlurb'
import FillingsBlurb from './ServicesBlurbs/FillingsBlurb'
import OrthoBlurb from './ServicesBlurbs/OrthoBlurb'
import ExtractionsBlurb from './ServicesBlurbs/ExtractionsBlurb'
import RootBlurb from './ServicesBlurbs/RootBlurb'
import CrownBlurb from './ServicesBlurbs/CrownBlurb'
import ImplantBlurb from './ServicesBlurbs/ImplantBlurb'
import WhiteBlurb from './ServicesBlurbs/WhiteBlurb'

class CategorySidebar extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		const verbiage = {
			english: english,
			spanish: spanish
		}

		return(
			<div className="desktop-inner-wrapper">
			<div className="desktop-procedure-list-component-container">
				<div className="desktop-procedure-sidebar-container">
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "family") }
						>
						{verbiage[this.props.lang].catsidebar.general}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "preventative") }
						>
						{verbiage[this.props.lang].catsidebar.cleaning}
					</div>
					<div
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "filling") }
						>
						{verbiage[this.props.lang].catsidebar.filling}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "root") }
						>
						{verbiage[this.props.lang].catsidebar.root}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "crowns") }
					>
						{verbiage[this.props.lang].catsidebar.crown}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "implant") }
						>
						{verbiage[this.props.lang].catsidebar.bridge}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "ortho") }
						>
						{verbiage[this.props.lang].catsidebar.ortho}
					</div>
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "wisdom") }
						>
						{verbiage[this.props.lang].catsidebar.extract}
					</div>
				{/* 
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "perio")}
						>
						{verbiage[this.props.lang].catsidebar.perio}
					</div> */}
					<div 
						className="desktop-procedure-sidebar-button"
						onClick={ (event) => this.props.changeCategory("sidebarCategory", "whitening") }
						>
						{verbiage[this.props.lang].catsidebar.cosmetic}
					</div>
				</div>
					
					<div className="desktop-procedure-component-content">
						{this.props.selectedCategory === "preventative" && <PreventativeBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "family" && <GeneralBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "filling" && <FillingsBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "ortho" && <OrthoBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "implant" && <ImplantBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "perio" && <PerioBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "wisdom" && <ExtractionsBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "root" && <RootBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "crowns" && <CrownBlurb lang={this.props.lang} />}
						{this.props.selectedCategory === "whitening" && <WhiteBlurb lang={this.props.lang} />}
					</div>

				</div>
				</div>
		)
	}
}

export default CategorySidebar