import React from 'react';
import logo from './logo.png';
import {Component} from 'react';

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
      <h1>Registration Page!!</h1>
    );
  }
}

export default RegistrationPage;
