import React from 'react';
import logo from './logo.png';
import {Component} from 'react';
import './PledgePage.css';
import RegistrationForm from './RegistrationForm'

export interface IRegistrationPageProps {

}

export interface IRegistrationPageState {

}

class RegistrationPage extends Component<IRegistrationPageProps, IRegistrationPageState> {
  constructor(props: IRegistrationPageProps) {
    super(props);
    this.state = {
    }
  }


  render() {
      return (
        <div className="pledge-page-main">
        <div className="pledge-form">
          <h1 className="font-color-white">Welcome to the Shatterproof family!</h1>
          <a className="font-color-white">Already have an account? Click here.</a>
          <RegistrationForm/>
          </div>
          <button className="elem-3" type="button">Submit</button>
        </div>
      );
  }
}

export default RegistrationPage;
