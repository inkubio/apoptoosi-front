import * as React from 'react';
import {ApoptoosiForm} from './ApoptoosiForm';
import {ApoptoosiList} from './ApoptoosiList';

import {
    Registeration,
    getRegisterations,
    postRegisteration,
  } from '../utils/api';
import { ApoptoosiLanguageChange } from './ApoptoosiLanguageChange';

import {LanguageContext} from './ApoptoosiMain';

interface IApoptoosiRegisterationPage {

    newRegisteration: Registeration,

    // handleChange: (event: any) => void,

    // handleSubmit: () => void,

    registerations: Registeration[],

    loading: boolean,

    language: boolean,

}

export class ApoptoosiRegisterationPage extends React.Component<{language: boolean}, IApoptoosiRegisterationPage> {
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
            language: this.props.language,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

      handleSubmit() {
        postRegisteration(this.state.newRegisteration);
      }
    
      async componentDidMount() {
        const registerations = await getRegisterations();
        this.setState({ registerations, loading: false });
      }

      render() {
          return(
            <LanguageContext.Consumer>
                {({language}) => (
                <div id="registerationPage">
                    <section id="Ilmoittautuminen" className="SignupForm">
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