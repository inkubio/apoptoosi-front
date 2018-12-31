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
          "../src/assets/img/RemoteA_logo.svg",
          "../src/assets/img/Philips_logo_new.svg",
          "../src/assets/img/AW_logo_main_version_RGB.svg",
          "../src/assets/img/Copy_of_futurice-logo-green.svg",
          "../src/assets/img/Planmeca_logo.png",
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

            <Route exact path="/" render={() => <ApoptoosiDefaultPage />}/>
            <Route exact path="/registeration" render={() => <ApoptoosiRegisterationPage />} />
          </div>
        </Router>

        <section className="Footer">
          <ApoptoosiFooter urls={this.state.footerImageLinks}/>
        </section>
      </ LanguageContext.Provider >
    );
  }
}
