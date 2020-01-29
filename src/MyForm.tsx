import {Component} from 'react';
import React from 'react';
import './MyForm.css';

interface Props {

}
interface State {
  firstName: string,
  lastName: string,
  email: string,
  dob: string
}
class MyForm extends Component {
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
      <form className="form-inline">
        <p className="elem">First Name: <input className="elem-2" type="text" name="firstName" onChange={this.myChangeHandler}/></p>
        <p className="elem">Last Name: <input className="elem-2" type="text" name="lastName" onChange={this.myChangeHandler}/></p>
        <p className="elem">Email: <input className="elem-2" type="text" name="email" onChange={this.myChangeHandler}/></p>
        <p className="elem">DOB:
        <input className="elem-2" type="text" name="dob" onChange={this.myChangeHandler}/></p>
      </form>
    );
  }
}
export default MyForm;
