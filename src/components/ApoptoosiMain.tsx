import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { ApoptoosiList } from './ApoptoosiList';
import {ApoptoosiCountdown} from './ApoptoosiCountdown';
// import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';
import {IApoptoosiContactInformationProps, ApoptoosiContactInformation} from './ApoptoosiContantInformation';
// import {ApoptoosiGoogleForms} from './ApoptoosiGoogleForms';
// import {NavLink} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';
import {
  Registeration,
  getRegisterations,
  postRegisteration,
} from '../utils/api';
import { AnyMxRecord } from 'dns';
import {ApoptoosiLinks} from './ApoptoosiLinks';
import {ApoptoosiFooter} from './ApoptoosiFooter';
import { setMaxListeners } from 'cluster';

import {ApoptoosiDefaultPage} from './ApoptoosiDefaultPage';
import {ApoptoosiRegisterationPage} from './ApoptoosiRegisterationPage';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { ApoptoosiLanguageChange } from './ApoptoosiLanguageChange';
import { timingSafeEqual } from 'crypto';

const RemoteA_logo = require('../assets/img/RemoteA_logo.svg');
const Philips_logo = require( '../assets/img/Philips_logo_new.svg');
const AW_logo = require('../assets/img/AW_logo_main_version_RGB.svg');
const Futu_logo = require('../assets/img/Copy_of_futurice-logo-green.svg');
const Planmeca_logo = require('../assets/img/Planmeca_logo.png');
const BpG_logo = require('../assets/img/BpG_Logotype_blue.png');
const Spinverse_logo = require('../assets/img/spinverse_fullcolor_NEW-01 (1).png');

/* Create global language boolean value */
export const LanguageContext = React.createContext({language: true}); 

interface IApoptoosiState {

  startDate: Date;

  footerImageLinks: string[];
  // false === the normal page true === registeration page *DEPRECATED*
  language: boolean;

}

/** Main component for Apoptoosi website.
 * Contains the state of the app, e.g. current registeration
 * and the list of all previously registered attendees.
 */
export class ApoptoosiMain extends React.Component<{}, IApoptoosiState> {
  constructor(props) {
    super(props);

    this.state = {

        startDate: new Date("2019-01-20T16:00:00"),

        footerImageLinks: [
          RemoteA_logo,
          Philips_logo,
          AW_logo,
          Futu_logo,
          Planmeca_logo,
          BpG_logo,
          Spinverse_logo,
        ],
        //Finnish is the default language
        language: true,


      };
      this.changelanguage = this.changelanguage.bind(this);
  }

  changelanguage(event: any) {
    event.preventDefault();
    this.setState({
      language: !this.state.language
    });
  }

  render() {
  
    return (
      <LanguageContext.Provider value={
          {language: this.state.language}
        }>
        <section className="LanguageChange">
          <ApoptoosiLanguageChange lang={this.state.language} callback={this.changelanguage}/>
        </section>
        <section className="Prologue">
          <h1 className="Title">Inkubio</h1>
          <h1 className="Title">15</h1>
          <h1 className="Heading">Apoptoosi XV</h1>
          <h2 className="Heading">2.3.2019</h2>
        </section>

        <section className="Countdown">
          <ApoptoosiCountdown />
        </section>
        <Router>
          <div> 
            <section className="Links">
              <ApoptoosiLinks />
            </section>

            <Route exact path="/inkubio15/" render={() => <ApoptoosiDefaultPage />}/>
            <Route exact path="/inkubio15/registration" render={() => <ApoptoosiRegisterationPage />} />
          </div>
        </Router>

        <section className="Footer">
          <ApoptoosiFooter urls={this.state.footerImageLinks} language={this.state.language} />
        </section>
      </ LanguageContext.Provider >
    );
  }
}
