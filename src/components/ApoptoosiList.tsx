import * as React from 'react';
import { ApoptoosiForm } from './ApoptoosiForm';
import { Registeration } from '../utils/api';
import { render } from 'react-dom';

const API_URL = 'http://localhost:3000';

interface IApoptoosiListProps {
  /** List of previously registered attendees */
  registerations: Registeration[];

  /** API fetching state */
  loading: boolean;
}

/** Component for the list of previously registered attendees.
 * Hooks to a list of registerations to render, and displays a
 * placeholder "loading"-indicator if data hasn't been fetched.
 */
export const ApoptoosiList: React.SFC<IApoptoosiListProps> = ({
  registerations,
  loading,
}) => (
  <>
    <h2>Signed up registerers</h2>
    {loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <>
        {registerations.length === 0 ? (
          <p>No registerations yet :(</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Group</th>
                <th>Alcohol</th>
                <th>Helloings</th>
              </tr>
            </thead>
            <tbody>
              {registerations.map(registeration => (
                <tr key={registeration.name}>
                  <td>{registeration.name}</td>
                  <td>{registeration.seatingGroup}</td>
                  <td>{registeration.alcohol}</td>
                  <td>{registeration.helloings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    )}
  </>
);
