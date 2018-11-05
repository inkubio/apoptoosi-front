import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { ApoptoosiList } from './ApoptoosiList';
import {ApoptoosiCountdown} from './ApoptoosiCountdown';
import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';
import {IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';

import {
  Registeration,
  getRegisterations,
  postRegisteration,
} from '../utils/api';
import { AnyMxRecord } from 'dns';

interface IApoptoosiState {
  /** Stores the current session's registeration attempt */
  newRegisteration: Registeration;

  /** Previous registerations from other people */
  registerations: Registeration[];

  /** API fetching state */
  loading: boolean;

  contacts: IApoptoosiContactInformationProps[];

  startDate: Date;
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
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
            <h1 className="Heading Title">Inkubio 15</h1>
            <h1 className="Heading Title">Apoptoosi XV</h1>
            <h2 className="Heading Title">2.3.2018</h2>
          </section>
          <section className="Countdown">
            <ApoptoosiCountdown />
          </section>
          <section className="ContactInformation">
              <ApoptoosiContactInformationTable contacts={this.state.contacts}/>
          </section>
          {/* {
            if(new Date() >= this.startDate)
            {
              return(
                <section className="SignupForm">
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
                </section>
            );
            } else {
              return null;
            } 
         } */}
      </>
    );
  }
}
