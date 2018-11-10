import * as React from 'react';
import { Registeration } from '../utils/api';
import { ShirtOrder } from '../models/ShirtOrder';

interface IApoptoosiShirtFormProps {
  /** New registeration object */
  formFields: ShirtOrder;

  /** Registeration field change handler */
  onChange: (event: any) => void;

  /** Send the registeration to the api */
  onSubmit: () => void;
}

/** Form for a new registeration to Apoptoosi.
 * Binds to a formFields object, and handles state
 * changes via external onChange method.
 */
export const ApoptoosiShirtForm: React.SFC<IApoptoosiShirtFormProps> = ({
  formFields,
  onChange,
  onSubmit,
}) => (
  <>
    <h2 className="Title">Order A Shirt!</h2>
    <form className="Signup" onSubmit={onSubmit}>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          value={formFields.firstName}
          onChange={onChange}
        />
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          value={formFields.lastName}
          onChange={onChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={onChange}
        />
        <label>Shirt size</label>
        <select>
            <option value="XXXS">XXXS</option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
        </select>
        <input type="submit" value="Submit" />
    </form>
  </>
);
