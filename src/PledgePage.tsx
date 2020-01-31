import React from 'react';
import logo from './logo.png';
import {Component} from 'react';
import './PledgePage.css';
import MyForm from './MyForm';

export interface IPledgePageProps {

}

export interface IPledgePageState {

}

class PledgePage extends Component<IPledgePageProps, IPledgePageState> {
  constructor(props: IPledgePageProps) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="pledge-page-main">
      <html>
      <div className="pledge-form">
        <h1 className="font-color-white">I, Pledge...</h1>
        <h2 className="font-color-white">
        For too long, cancer has taken our mothers, our fathers, our sons and daughters, our grandparents, and partners. It’s time to say, “enough is enough.”

A future without the pain and suffering of cancer is possible. But it won’t be possible without the commitment of each and every person.

If you believe in a world without cancer, take the pledge now. Help us build a future where nobody will live in fear of cancer.
        </h2>
        <MyForm/>
        <button className="elem-3" type="button">Submit</button>
        </div>
      </html>
      </div>
    );
  }
}

export default PledgePage;
