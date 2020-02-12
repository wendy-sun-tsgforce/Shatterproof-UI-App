import {Component} from 'react';
import React from 'react';
import './MyForm.css';
import './PledgePage.css'

interface Props {

}
interface State {
  firstName: string,
  lastName: string,
  email: string,
  dob: string
}
class RegistrationForm extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      dob: "",
    };
  }
  myChangeHandler = (event: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    })
  }
  render() {
    return (
      <div>
      <p className="elem">First Name: <input className="elem-2" type="text" name="firstName"
       onChange={this.myChangeHandler}/></p>
       <p className="elem">Last Name: <input className="elem-2" type="text" name="lastName" onChange={this.myChangeHandler}/></p>
       <p className="elem">Email: <input className="elem-2" type="text" name="email" onChange={this.myChangeHandler}/></p>
       <p className="elem">Cellphone:
       <input className="elem-2" type="text" name="dob" onChange={this.myChangeHandler}/></p>
       <p className="elem">City:
       <input className="elem-2" type="text" name="dob" onChange={this.myChangeHandler}/></p>
       <p className="elem">Just a simple example! Please provide us with the exact needed form inputs :) </p>
       </div>
    );
  }
}
export default RegistrationForm;
