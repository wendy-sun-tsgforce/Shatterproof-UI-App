import React from 'react';
import logo from './logo.png';
import crowd from './shatterproof.jpg';
import {Component} from 'react';
import './LandingPage.css';
import  PledgePage from './PledgePage'
import  RegistrationPage from './RegistrationPage'

export interface ILandingPageProps {

}

export interface ILandingPageState {
  activeTab: number
}

class LandingPage extends Component<ILandingPageProps, ILandingPageState> {
  constructor(props: ILandingPageProps) {
    super(props);
    this.setActiveTab = this.setActiveTab.bind(this);
    this.state = {
      activeTab: 1
    }
  }

  setActiveTab = (tab: number) => {
    console.log(tab);
    this.setState({
      activeTab: tab
    })
  }

  render() {
  function tabClassname(isActive: boolean) {
      return isActive ? "btn menu-tab-button-active" : "btn menu-tab-button";
    }
    return (
      <div className="landing-page-main-container">
      <div className="lp-top-row">
      <div className="float-left logo">
      <img className="logo" src={logo}></img>
      </div>
      <div className="float-right menu">
        <div className="btn-group float-right" role="group" aria-label="Basic example">
        <button type="button" className={tabClassname(this.state.activeTab === 1)} onClick={()=>this.setActiveTab(1)}>Pledge</button>
        <button type="button" className={tabClassname(this.state.activeTab === 2)} onClick={()=>this.setActiveTab(2)}>Registration</button>
        </div>
      </div>
    </div>

      <div className="lp-mid-row">
      <div className="lp-mid-row-left">
        <img className="crowd" src={crowd}></img>
      </div>

      <div className="lp-mid-row-right float-right" >
      {this.state.activeTab === 1 && (<PledgePage/>)}
      </div>

      </div>


      </div>
    );
  }
}

export default LandingPage;
