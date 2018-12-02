import * as React from 'react';
import { Registeration } from '../utils/api';

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
    <h3>Registered attendees</h3>
    {loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <>
        {registerations.length === 0 ? (
          <p>No registerations.</p>
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
                <tr key={registeration.lastName}>
                  <td>{registeration.firstName}</td>
                  <td>{registeration.lastName}</td>
                  <td>{registeration.seatingGroup}</td>¨
                  <td>{registeration.email}</td>
                  <td>{registeration.alcohol}</td>
                  <td>{registeration.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    )}
  </>
);
