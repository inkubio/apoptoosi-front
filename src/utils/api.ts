const API_URL = 'http://localhost:5000';

/** General registeration object, used to send new
 * registerations to API, and previous registerations
 * that get fetched also follow this structure.
 */
export interface Registeration {
  /** First name of the attendee */
  firstName: string;

  /**Last name of the attendee **/
  lastName: string;

  /**Email of the attendee **/ 
  email: string;
  /** People with whom the attendee wants to sit with */
  seatingGroup: string;

  /** Is the attendee a doku */
  alcohol: boolean;

  /** What the attendee wants to tell other attendees */
  text: string;
}

/** Fetch a list of previous registerations to show on the website */
export const getRegisterations = async (): Promise<Registeration[]> => {
  try {
    const resp = await fetch(
      `${API_URL}/api/RegistrationData/Registrations`,
    );
    const data = await resp.json();
    return data;
  } catch (e) {
    return [];
  }
};

/** Generate a new registeration */
export const postRegisteration = async (
  registerationData: Registeration,
): Promise<null> => {

  try {
    const resp = await fetch(
      `${API_URL}/api/RegistrationData/CreateRegistration`,
      {
        headers: {
          'Connection': 'keep-alive',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(registerationData),
      },
    );
    // await fetch(
    //   `${API_URL}/api/RegistrationData/CreateRegistration`,
    //   {
    //     headers: {
    //       'Connection': 'keep-alive',
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     body: JSON.stringify(registerationData),
    //   },
    // );
    // console.log(resp);

  } catch (e) {
    // console.log('Failure to fetch with error ' + e); 
  }
  return null;
};
