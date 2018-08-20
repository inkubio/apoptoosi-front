import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { ApoptoosiList } from './ApoptoosiList';
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
        name: '',
        seatingGroup: '',
        alcohol: false,
        helloings: '',
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
        <h1>Apoptoosi</h1>

        <section className="RegisteredList">
          <ApoptoosiList
            registerations={this.state.registerations}
            loading={this.state.loading}
          />
        </section>

        <section className="SignupForm">
          <ApoptoosiForm
            formFields={this.state.newRegisteration}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </section>
      </>
    );
  }
}
