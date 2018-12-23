import * as React from 'react';
// import { ApoptoosiForm } from './ApoptoosiForm';
// import { ApoptoosiList } from './ApoptoosiList';
import {ApoptoosiCountdown} from './ApoptoosiCountdown';
// import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';
import {IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';
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
  // false === the normal page true === registeration page
  page: boolean;

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

        page: false,

      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.submitGoogleForms = this.submitGoogleForms.bind(this);
  }

  // submitGoogleForms(event: any, ref) {
  //   console.log(event);
  //   const formUrl = this.state.googleFormsUrl + '/formResponse';
  // }

  handleChange(event: any) {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // React cannot handle nested objects very well. We shall create a dummy object to update.
    var newReg: Registeration = this.state.newRegisteration;
    newReg[target.name] = value;

    this.setState({
      newRegisteration: newReg, 
    });
    // console.log(this.state.newRegisteration);
  }

  handleSubmit() {
    postRegisteration(this.state.newRegisteration);
  }

  async componentDidMount() {
    const registerations = await getRegisterations();
    this.setState({ registerations, loading: false });
  }

  changePage = () => {
    event.preventDefault();
    this.setState({page: !this.state.page});
  }

  renderApoptoosiPage = () => {
    if(this.state.page) {
      return <ApoptoosiRegisterationPage />
    }
    else {
      return <ApoptoosiDefaultPage />
    }
  }

  render() {
    return (
      <>
          <section>
            <h1 className="Title">Inkubio 15</h1>
            <h1 className="Heading">Apoptoosi XV</h1>
            <h2 className="Heading">2.3.2019</h2>
          </section>
          <section className="Countdown">
            <ApoptoosiCountdown />
            <ApoptoosiLinks urls={this.state.linkUrls} />
          </section>
          {
            this.renderApoptoosiPage()
          }
         <section className="Footer">
              <ApoptoosiFooter urls={this.state.footerImageLinks}/>
         </section>
      </>
    );
  }
}
