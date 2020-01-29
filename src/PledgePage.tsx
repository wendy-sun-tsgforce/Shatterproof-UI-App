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
        <h1>I, Pledge</h1>
        <h2>Slave spirituals often had hidden double meanings. On one level, spirituals referenced heaven, Jesus, and the soul, but on another level, the songs spoke about slave resistance. For example, according to Frederick Douglass, the song “O Canaan, Sweet Canaan” spoke of slaves’ longing for heaven, but it also expressed their desire to escape to the North. Careful listeners heard this second meaning in the following lyrics: “I don’t expect to stay / Much longer here. / Run to Jesus, shun the danger. / I don’t expect to stay.” When slaves sang this song, they could have been speaking of their departure from this life and their arrival in heaven; however, they also could have been describing their plans to leave the South and run, not to Jesus, but to the North. Slaves even used songs like “Steal Away to Jesus (at midnight)” to announce to other slaves the time and place of secret, forbidden meetings. What whites heard as merely spiritual songs, slaves discerned as detailed messages. The hidden meanings in spirituals allowed slaves to sing what they could not say.
        </h2>
        <MyForm/>
        <button className="elem-3" type="button">Submit</button>
      </html>
      </div>
    );
  }
}

export default PledgePage;
