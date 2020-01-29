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
        <h2 className="font-color-white">Addiction is a chronic, relapsing brain disease. Just as with other diseases, medications can be a highly effective treatment. In fact, FDA-approved medications like
        buprenorphine, methadone, and naltrexone are widely considered by experts and researchers to be the gold standard of treatment for opioid use disorder.
But far too often, stigma, shame, and misinformation prevent patients in need from receiving the medications that could save their lives. And people who do use medications to treat their addiction sometimes feel ostracized and judged, like they’re not “really” in recovery.
This has to end.
Medication-assisted treatment (MAT) is the practice of utilizing medications as well as cognitive and behavioral therapies to treat substance use disorders. These medications prevent overdose, ease symptoms of withdrawal, decrease cravings, and establish normal brain function. Their usage is recognized by every leading group of addiction and health experts, from the National Institute on Drug Abuse (NIDA) and the American Society of Addiction Medicine (ASAM) to the Centers for Disease Control (CDC) and the World Health Organization (WHO).
People using medications for addiction can work, drive, and care for their loved ones. Using medications to support addiction treatment is not “replacing one drug with another”—it’s a lifesaving and evidence-based approach.
Every person with addiction should receive an individualized treatment plan. Medications may not be right for everyone—but they should be made fully available as an option, without derision or judgment, to everyone entering treatment for a substance use disorder.
Add your name NOW to show that you stand with people who use medications to support their recovery. Let them know that you don’t buy into the judgments or the discrimination, and that you value every type of recovery journey.</h2>
        </div>
        <div className="form">
        <MyForm/>
        <button className="elem-3" type="button">Submit</button>
        </div>
      </html>
      </div>
    );
  }
}

export default PledgePage;
