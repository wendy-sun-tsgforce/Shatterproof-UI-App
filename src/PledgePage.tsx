import React from 'react';
import logo from './logo.png';
import {Component} from 'react';

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
      <h1>Pledge Page!!</h1>
    );
  }
}

export default PledgePage;
