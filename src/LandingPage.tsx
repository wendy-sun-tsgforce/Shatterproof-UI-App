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
    return (
      <div className='landing-page-main-container'>
      <div className='row'>
        <a href="https://www.shatterproof.org/sites/default/files/2017-10/stigma-one-sheet.pdf"  target="_blank" className="image-wrap">
          <img className="menu-image square-words" />
            <div className="overlay">
            <h3 className='left-align'> Words Hurt...</h3>
            <h5 className='left-align'>A full list of stigmatizing words to avoid and what to use instead</h5>
            <h5 className='left-align fa fa-arrow-right'></h5>
            </div>
        </a>

        <a href="#" target="_blank" className="image-wrap">
          <img className="menu-image square-pledge" />
            <div className="overlay">
            <h3 className='left-align'>Sign the Pledge</h3>
            <h5 className='left-align'>Pledge to use affirming, person-centered language against substance abuse </h5>
            <h5 className='left-align fa fa-arrow-right'></h5>
            </div>
        </a>

        <a href="https://www.shatterproof5k.org/" target="_blank" className="image-wrap">
          <img className="menu-image square-running"/>
            <div className="overlay">
            <h3 className='left-align'>Attend an event</h3>
            <h5 className='left-align'>Run in a Shatterproof near you </h5>
            <h5 className='left-align fa fa-arrow-right'></h5>
            </div>
        </a>

        <a href="https://p2a.co/A0VxYRC" target="_blank" className="image-wrap">
          <img className="menu-image square-email"/>
            <div className="overlay">
            <h3 className='left-align'>Reach out & Spread the Word</h3>
            <h5 className='left-align'>Use your voice & Send email to local media who misuse or mischaracterize addiction disease</h5>
            <h5 className='left-align fa fa-arrow-right'></h5>
            </div>
        </a>
    </div>

    <div className='row'>
      <a href="https://fundraise.shatterproof.org/" target="_blank" className="image-wrap">
            <img className="menu-image square-event"/>
              <div className="overlay">
              <h3 className='left-align'>Create your own event</h3>
              <h5 className='left-align'>Channel your unique talents, interests, and skills into an unforgettable fundraiser. </h5>
              <h5 className='left-align fa fa-arrow-right'></h5>
              </div>
      </a>

      <a href="https://www.shatterproof.org/community/become-an-ambassador" target="_blank" className="image-wrap">
        <img className="menu-image square-amb" />
          <div className="overlay">
          <h3 className='left-align'>Become an Ambassador</h3>
          <h5 className='left-align'>Get involved & Represent Shatterproof at a local event</h5>
          <h5 className='left-align fa fa-arrow-right'></h5>
          </div>
      </a>

      <a href="https://connect.clickandpledge.com/w/Form/4e21c330-0011-430e-a2c0-5400c4ba45d5?TRK=webnavbtn"
       target="_blank" className="image-wrap">
        <img className="menu-image square-donate"/>
          <div className="overlay">
          <h3 className='left-align'>Donate to Shatterproof</h3>
          <h5 className='left-align'>Every dollar of your generous donation goes to support programs to help end addiction.</h5>
          <h5 className='left-align fa fa-arrow-right'></h5>
          </div>
      </a>

      <a href="https://www.shatterproof.org/advocacy-toolkit" target="_blank" className="image-wrap">
        <img className="menu-image square-toolkit" />
          <div className="overlay">
          <h3 className='left-align'>Advocacy Toolkit</h3>
          <h5 className='left-align'>Download the toolkit to help in our journey of fighting against addiction disease</h5>
          <h5 className='left-align fa fa-arrow-right'></h5>
          </div>
      </a>
  </div>

  <div className='row'>
    <a href="https://www.shatterproof.org/advocacy-toolkit" target="_blank" className="image-wrap">
      <img className="menu-image square-media" />
        <div className="overlay">
        <h3 className='left-align'>Post on Social Media</h3>
        <h5 className='left-align'>Share your written story, blog, or video with us and the world</h5>
        <h5 className='left-align fa fa-arrow-right'></h5>
        </div>
    </a>

    <a href="#" target="_blank" className="image-wrap">
      <img className="menu-image square-facebook" />
        <div className="overlay">
        <h3 className='left-align'>Create a Facebook Fundraising Campaign</h3>
        <h5 className='left-align'>Birthday coming up? Ask for a Shatterproof donation for your birthday gift!</h5>
        <h5 className='left-align fa fa-arrow-right'></h5>
        </div>
    </a>

    <a href="https://www.shatterproof.org/about-addiction" target="_blank" className="image-wrap">
      <img className="menu-image square-reading"/>
        <div className="overlay">
        <h3 className='left-align'>Access Educational Readings</h3>
        <h5 className='left-align'> Continue learning about addiction disease and prevention with Shatterproof.</h5>
        <h5 className='left-align fa fa-arrow-right'></h5>
        </div>
    </a>

    <a href="https://www.shatterproof.org/store" target="_blank" className="image-wrap">
      <img className="menu-image square-merch"/>
        <div className="overlay">
        <h3 className='left-align'>Merchandise</h3>
        <h5 className='left-align'>Support and represent Shatterproof with merch!</h5>
        <h5 className='left-align fa fa-arrow-right'></h5>
        </div>
    </a>
</div>
    </div>


    );
  }
}

export default LandingPage;
