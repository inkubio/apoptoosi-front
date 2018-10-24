import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { ApoptoosiList } from './ApoptoosiList';
import {ApoptoosiCountdown} from './ApoptoosiCountdown';

import {
  Registeration,
  getRegisterations,
  postRegisteration,
} from '../utils/api';

interface IApoptoosiState {
  /** Stores the current session's registeration attempt */
  newRegisteration: Registeration;

  /** Previous registerations from other people */
  registerations: Registeration[];

  /** API fetching state */
  loading: boolean;
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
          </section>

          <section className="Countdown">
          <h1 className="Heading Title">Apoptoosi XV</h1>
          <h2 className="Heading Title">2.3.2018</h2>
            <ApoptoosiCountdown />
          </section>

          <section className="ContactInformation">

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
      </>
    );
  }
}
