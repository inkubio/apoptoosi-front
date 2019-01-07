import * as React from 'react';
import {ApoptoosiForm} from './ApoptoosiForm';
import {ApoptoosiList} from './ApoptoosiList';

import {
    Registeration,
    getRegisterations,
    postRegisteration,
  } from '../utils/api';
  
import {LanguageContext} from './ApoptoosiMain';

interface IApoptoosiRegisterationPage {

    newRegisteration: Registeration,

    registerations: Registeration[],

    loading: boolean,

    currentDate: Date;

    openingDate: Date;
}

export class ApoptoosiRegisterationPage extends React.Component<{}, IApoptoosiRegisterationPage> {
    
    countdown: any;

    constructor(props) {
        super(props);

        this.state = {
            newRegisteration: {
                firstName: '',
                lastName: '',
                email: '',
                seatingGroup: '',
                alcohol: false,
                salute: false,
                invited: false,
                text: '',
            },
            registerations: [],
            loading: true,
            currentDate: new Date(),
            openingDate: new Date('2019-01-18T12:00:00'),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tick = this.tick.bind(this);
        this.updateRegisterations = this.updateRegisterations.bind(this);
    }

    handleChange(event: any) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // React cannot handle nested objects very well. We shall create a dummy object to update.
        var newReg: Registeration = this.state.newRegisteration;
        newReg[target.name] = value;
        
        // console.log(newReg);

        this.setState({
          newRegisteration: newReg, 
        });
        // console.log(this.state.newRegisteration);
      }

      tick() {
          this.setState({
              currentDate: new Date()
            });
      }

      async handleSubmit(event: any) {
        event.preventDefault();
        await postRegisteration(this.state.newRegisteration);
        await this.updateRegisterations();
      }

      async updateRegisterations() {
        const registerations = await getRegisterations();
        this.setState({ registerations, loading: false });
      }
    
      async componentDidMount() {
        await this.updateRegisterations();

        this.countdown = setInterval(this.tick, 1000);
      }

      componentWillUnmount() {
          clearInterval(this.countdown);
      }

      render() {
          return(
            <LanguageContext.Consumer>
                {({language}) => (
                <div id="RegisterationPage">
                    <section id="Ilmoittautuminen" className="SignupForm">
                    <h1 className="informationText">{this.state.currentDate.getTime() <= this.state.openingDate.getTime() ? 
                        (language ? 'Ilmoittautuminen aukeaa kutsuvieraille perjantaina 18.1.2019 klo 12 ja muille vieraille viikon jälkeen perjantaina 25.1.2019 klo 12. Ilmoittautuminen sulkeutuu perjantaina 15.2.2019 23:55.' 
                        : 'Sign up opens for invited guests on Friday 18.1.2019 at 12:00, and for other guests one week afterwards, on Friday 25.1.2019 at 12:00. The sign up closes on Friday 15.2.2019 at 23:55.') 
                        : null}
                    </h1>
                    <ApoptoosiForm
                    formFields={this.state.newRegisteration}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    language={language}
                    />
                    </section>
                    <section className="RegisteredList">
                    <ApoptoosiList
                    registerations={this.state.registerations}
                    loading={this.state.loading}
                    language={language}
                    />
                    </section>
                </div>)
        }
            </ LanguageContext.Consumer>
          )
      }
}