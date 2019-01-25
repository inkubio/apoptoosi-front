import * as React from 'react';
import { Registeration } from '../utils/api';

interface IApoptoosiFormProps {
  /** New registeration object */
  formFields: Registeration;

  /** Registeration field change handler */
  onChange: (event: any) => void;

  /** Send the registeration to the api */
  onSubmit: (event: any) => void;

  language: boolean;

  inLoading: boolean;
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
  inLoading,
}) => {
    const currentDate = new Date();
    const openingDate = new Date('2019-01-18T12:00:00');
    const truthy: boolean = currentDate.getTime() < openingDate.getTime() || inLoading;
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
              <label>Sillis</label>
              <input
                  type="checkbox"
                  name="sillis"
                  checked={formFields.sillis}
                  onChange={onChange}
              />
              <label>Erikoisruokavalio</label>
              <input
                type="text"
                name="allergy"
                value={formFields.allergy}
                onChange={onChange}
              />
              <label>Avec</label>
              <input
                type="text"
                name="avec"
                value={formFields.avec}
                onChange={onChange}
              />
              <label>Jätän tervehdyksen</label>
              <input 
                type="checkbox"
                name="salute"
                checked={formFields.salute}
                onChange={onChange}
                />
              <label>Olen kutsuvieras</label>
              <input
                type="checkbox"
                name="invited"
                checked={formFields.invited}
                onChange={onChange}
              />
              <label>Olen alumni</label>
              <input
                type="checkbox"
                name="alumni"
                checked={formFields.alumni}
                onChange={onChange}
              />
              <label>Edustamasi taho</label>
              <input
                type="text"
                name="text"
                value={formFields.text}
                onChange={onChange}
              />

              <input className="inputButton" type="submit" value="Ilmoittaudu" disabled={truthy} />
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
              <label>Herring brunch</label>
              <input
                  type="checkbox"
                  name="sillis"
                  checked={formFields.sillis}
                  onChange={onChange}
              />
              <label>Dietary restrictions</label>
              <input
                type="text"
                name="allergy"
                value={formFields.allergy}
                onChange={onChange}
              />
              <label>Avec</label>
              <input
                type="text"
                name="avec"
                value={formFields.avec}
                onChange={onChange}
              />
              <label>I shall be leaving a salute</label>
              <input 
                type="checkbox"
                name="salute"
                checked={formFields.salute}
                onChange={onChange}
                />

              <label>I am invited guest</label>
              <input
                type="checkbox"
                name="invited"
                checked={formFields.invited}
                onChange={onChange}
              />
              <label>I am an alumni</label>
              <input
                type="checkbox"
                name="alumni"
                checked={formFields.alumni}
                onChange={onChange}
              />
              <label>Represented organisation</label>
              <input
                type="text"
                name="text"
                value={formFields.text}
                onChange={onChange}
              />
              <input className="inputButton" type="submit" value="Ilmoittaudu" disabled={truthy} />

          </form>
          </>
        );
      }
};
