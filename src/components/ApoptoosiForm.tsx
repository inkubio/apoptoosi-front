import * as React from 'react';
import { Registeration } from '../utils/api';

interface IApoptoosiFormProps {
  /** New registeration object */
  formFields: Registeration;

  /** Registeration field change handler */
  onChange: (event: any) => void;

  /** Send the registeration to the api */
  onSubmit: () => void;

  language: boolean;
}

/** Form for a new registeration to Apoptoosi.
 * Binds to a formFields object, and handles state
 * changes via external onChange method.
 */
export const ApoptoosiForm: React.SFC<IApoptoosiFormProps> = ({
  formFields,
  onChange,
  onSubmit,
  language,
}) => {
    if(language) {
          return(
          <>
          <h3>Ilmoittautuminen</h3>
          <form className="Signup" onSubmit={onSubmit}>
              <label>Etunimi</label>
              <input
                type="text"
                name="firstName"
                value={formFields.firstName}
                onChange={onChange}
              />
              <label>Sukunimi</label>
              <input
                type="text"
                name="lastName"
                value={formFields.lastName}
                onChange={onChange}
              />
              <label>Sähköposti</label>
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={onChange}
              />
              <label>Pöytäseurue</label>
              <input
                type="text"
                name="seatingGroup"
                value={formFields.seatingGroup}
                onChange={onChange}
              />
              <label>Alkoholillinen</label>
              <input
                type="checkbox"
                name="alcohol"
                checked={formFields.alcohol}
                onChange={onChange}
              />
              <label>Tervehdykset</label>
              <input
                type="text"
                name="text"
                value={formFields.text}
                onChange={onChange}
              />
              <input type="submit" value="Submit" />
          </form>
          </>
        );
      } else {
        return(
          <>
          <h3>Registration</h3>
          <form className="Signup" onSubmit={onSubmit}>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formFields.firstName}
                onChange={onChange}
              />
              <label>Surname</label>
              <input
                type="text"
                name="lastName"
                value={formFields.lastName}
                onChange={onChange}
              />
              <label>email</label>
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={onChange}
              />
              <label>Seating group</label>
              <input
                type="text"
                name="seatingGroup"
                value={formFields.seatingGroup}
                onChange={onChange}
              />
              <label>With alcohol</label>
              <input
                type="checkbox"
                name="alcohol"
                checked={formFields.alcohol}
                onChange={onChange}
              />
              <label>Greetings to the guild</label>
              <input
                type="text"
                name="text"
                value={formFields.text}
                onChange={onChange}
              />
              <input type="submit" value="Submit" />
          </form>
          </>
        );
      }
};
