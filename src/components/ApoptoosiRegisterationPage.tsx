import * as React from 'react';
import {ApoptoosiForm} from './ApoptoosiForm';
import {ApoptoosiList} from './ApoptoosiList';

import {
    Registeration,
    getRegisterations,
    postRegisteration,
  } from '../utils/api';

interface IApoptoosiRegisterationPage {

    newRegisteration: Registeration,

    // handleChange: (event: any) => void,

    // handleSubmit: () => void,

    registerations: Registeration[],

    loading: boolean,

}

// export const ApoptoosiRegisterationPage: React.SFC<IApoptoosiRegisterationPage> = (
//     {
//         newRegisteration,
//         handleChange,
//         handleSubmit,
//         registerations,
//         loading,
//     }
//     ) => {
//     return(
//         <>
//     <section id="Ilmoittautuminen" className="SignupForm">
//         <ApoptoosiForm
//           formFields={this.state.newRegisteration}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//           />
//       </section>
//       <section className="RegisteredList">
//       <ApoptoosiList
//         registerations={this.state.registerations}
//         loading={this.state.loading}
//         />
//       </section>
//       </>
//       );
// }

export class ApoptoosiRegisterationPage extends React.Component<{}, IApoptoosiRegisterationPage> {
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
        }

    }

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

      render() {
          return(
            <>
            <div id="registerationPage">
                <section id="Ilmoittautuminen" className="SignupForm">
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
            </div>
            </>
          )
      }
}