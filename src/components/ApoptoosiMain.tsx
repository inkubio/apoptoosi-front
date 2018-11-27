import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { ApoptoosiList } from './ApoptoosiList';
import {ApoptoosiCountdown} from './ApoptoosiCountdown';
import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';
import {IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';
import {ApoptoosiGoogleForms} from './ApoptoosiGoogleForms';
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
          {
            name: "Linda Wederhorn",
            email: "linda.wederhorn(ät)aalto.fi",
            phoneNumber: "045 403 3693",
          },      
          {
            name: "Eeva-Sofia Haukipuro",
            email: "eeva-sofia.haukipuro(ät)aalto.fi",
            phoneNumber: "040 089 5200‬",
          },
          {
            name: "Milja Leinonen",
            email: "milja.leinonen(ät)aalto.fi",
            phoneNumber: "050 911 7088‬",
          },
        ],
        startDate: new Date("2019-01-20T16:00:00"),
        // googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g/viewform?embedded=true",
        googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g",
        linkUrls: [
          "Juhlavuosi",
          "Apoptoosi XV",
          "Ilmoittautuminen",
          "Yhteystiedot",
        ],

        footerImageLinks: [
          "../src/assets/img/Philips_logo_new.svg",
          "../src/assets/img/AW_logo_main_version_RGB.svg",
          "../src/assets/img/Copy_of_futurice-logo-green.svg",
          "../src/assets/img/Planmeca_logo.png",
          "../src/assets/img/RemoteA_logo.svg",
        ]

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

    this.setState({
      newRegisteration: {
        [target.name]: value,
      } as Registeration,
    });
  }

  handleSubmit() {
    postRegisteration(this.state.newRegisteration);
  }

  async componentDidMount() {
    const registerations = await getRegisterations();
    this.setState({ registerations, loading: false });
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
          <section className="celebYear"></section>
          <section className="apoptoosiXV"></section>

          <section className="ContactInformation">
              <ApoptoosiContactInformationTable contacts={this.state.contacts}/>
          </section>
          <section className="GoogleForms">
            {/* <ApoptoosiGoogleForms url={this.state.googleFormsUrl} /> */}
            {/* <span><a className="ToosaLink" href="https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g/viewform?usp=sf_link">Shirt order!</a></span> */}
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCTxI0hts5NhOqGAkffuGx6GYXepdyT5KOVXbXgDrSH68O7g/viewform?usp=sf_link"></iframe> */}
          </section>

          
              {/* <section className="SignupForm">
              <ApoptoosiForm
                formFields={this.state.newRegisteration}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />
              </section>

              <section className="RegisteredList">
              <ApoptoosiList
                registerations={this.state.registerations}
                loading={this.state.loading}
                />
              </section> */}

         <section className="Footer">
              <ApoptoosiFooter urls={this.state.footerImageLinks}/>
         </section>
      </>
    );
  }
}
