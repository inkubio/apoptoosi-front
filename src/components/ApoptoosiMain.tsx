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

export const LanguageContext = React.createContext({language: true}); 

interface IApoptoosiState {
  /** Stores the current session's registeration attempt */
  newRegisteration: Registeration;

  /** Previous registerations from other people */
  registerations: Registeration[];

  /** API fetching state */
  loading: boolean;

  contacts: IApoptoosiContactInformationProps[];

  startDate: Date;

  googleFormsUrl: string;

  linkUrls: string[];

  footerImageLinks: string[];
  // false === the normal page true === registeration page *DEPRECATED*
  language: boolean;

  // registerationComponent: any;


}

/** Main component for Apoptoosi website.
 * Contains the state of the app, e.g. current registeration
 * and the list of all previously registered attendees.
 */
export class ApoptoosiMain extends React.Component<{}, IApoptoosiState> {
  constructor(props) {
    super(props);

    this.state = {
      newRegisteration: {
        firstName: '',
        lastName: '',
        email: '',
        seatingGroup: '',
        alcohol: false,
        text: '',
      },
      registerations: [],
      loading: true,
      contacts: [
        ],
        startDate: new Date("2019-01-20T16:00:00"),
        // googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g/viewform?embedded=true",
        googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g",
        linkUrls: [
          "Juhlavuosi",
          "ApoptoosiXV",
          "Ilmoittautuminen",
          "Yhteystiedot",
        ],

        footerImageLinks: [
          "../src/assets/img/RemoteA_logo.svg",
          "../src/assets/img/Philips_logo_new.svg",
          "../src/assets/img/AW_logo_main_version_RGB.svg",
          "../src/assets/img/Copy_of_futurice-logo-green.svg",
          "../src/assets/img/Planmeca_logo.png",
        ],
        //Finnish is the default language
        language: true,

        // registerationComponent: <ApoptoosiDefaultPage language={this.state.language} />,



      };
      this.changelanguage = this.changelanguage.bind(this);
  }

  changelanguage(event: any) {
    event.preventDefault();
    this.setState({
      language: !this.state.language
    });
    // console.log(this.state.language);
    this.forceUpdate();
  }

  renderDefault(language) {
    return () => <ApoptoosiRegisterationPage language={language}/>
  }

  render() {
  
    const defaultPage = () => <ApoptoosiDefaultPage language={this.state.language} />;

    return (
      <LanguageContext.Provider value={
          {language: this.state.language}
        }>
      {/* <div>Current value of language is {this.state.language.toString()}</div> */}
      {/* <ApoptoosiContactInformation  */}
      <ApoptoosiLanguageChange lang={this.state.language} callback={this.changelanguage}/>
          <section>
            <h1 className="Title">Inkubio 15</h1>
            <h1 className="Heading">Apoptoosi XV</h1>
            <h2 className="Heading">2.3.2019</h2>
          </section>

          <section className="Countdown">
            <ApoptoosiCountdown />
            {/* <ApoptoosiLinks urls={this.state.linkUrls} changePage={this.changePage}/> */}
          </section>
          <Router>
            <div>
            <ApoptoosiLinks /*urls={this.state.linkUrls} changePage={this.changePage}*//>

            <Route exact path="/" component={defaultPage}/>
            <Route exact path="/registeration" render={() => <ApoptoosiRegisterationPage language={this.state.language}/>} />
            </div>
          </Router>

         <section className="Footer">
              <ApoptoosiFooter urls={this.state.footerImageLinks}/>
         </section>
      </ LanguageContext.Provider >
    );
  }
}
