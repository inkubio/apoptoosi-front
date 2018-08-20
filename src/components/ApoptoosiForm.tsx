import * as React from 'react';
import { Registeration } from '../utils/api';

interface IApoptoosiFormProps {
  /** New registeration object */
  formFields: Registeration;

  /** Registeration field change handler */
  onChange: (event: any) => void;

  /** Send the registeration to the api */
  onSubmit: () => void;
}

/** Form for a new registeration to Apoptoosi.
 * Binds to a formFields object, and handles state
 * changes via external onChange method.
 */
export const ApoptoosiForm: React.SFC<IApoptoosiFormProps> = ({
  formFields,
  onChange,
  onSubmit,
}) => (
  <>
    <h2>Sign up pls</h2>
    <form className="Signup" onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formFields.name}
        onChange={onChange}
      />

      <label>SeatingGroup</label>
      <input
        type="text"
        name="seatingGroup"
        value={formFields.seatingGroup}
        onChange={onChange}
      />

      <label>Alcohol</label>
      <input
        type="checkbox"
        name="alcohol"
        checked={formFields.alcohol}
        onChange={onChange}
      />

      <label>Helloings</label>
      <input
        type="text"
        name="text"
        value={formFields.helloings}
        onChange={onChange}
      />

      <input type="submit" value="Submit" />
    </form>
  </>
);
