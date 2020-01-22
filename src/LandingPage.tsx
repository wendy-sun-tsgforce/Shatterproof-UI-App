import React from 'react';
import logo from './logo.png';
import {Component} from 'react';
import './LandingPage.css';
import  PledgePage from './PledgePage'

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
    return (
      <div className="landing-page-main-container">
      <div className="lp-top-row">
      <div className="float-left logo">
      <img className="logo" src={logo}></img>
      </div>
      <div className="float-right menu">
        <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn menu-tab-button" onClick={()=>this.setActiveTab(1)}>Pledge</button>
        <button type="button" className="btn menu-tab-button" onClick={()=>this.setActiveTab(2)}>Registration</button>
        </div>
      </div>
    </div>

      <div className="lp-mid-row">
        {this.state.activeTab === 1 ? <PledgePage /> : <div/> }
      </div>

      </div>
    );
  }
}

export default LandingPage;
