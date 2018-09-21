import React, { Component } from 'react';
import './App.css';

import MediaQuery from 'react-responsive';
import MobileSite from './components/MobileSite'
import DesktopSite from './components/DesktopSite'
import TabletSite from './components/TabletSite'


class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "spanish"
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage() {
    console.log("Changing Language")
    if (this.state.language === "english") {
      this.setState({
        language: "spanish"
      })
    } else {
      this.setState({
        language: "english"
      })
    }
  }

  

  render() {
    return (
      <div className="page-wrapper">
        <MediaQuery minWidth={2} maxWidth={1179}>
          <TabletSite lang={this.state.language} changeLang={this.changeLanguage} />
        </MediaQuery>
        <MediaQuery minWidth={1180}>
          <DesktopSite 
            lang={this.state.language}
            changeLang={this.changeLanguage}
          />
        </MediaQuery>
      </div>

    );
  }
}

export default Root;
