import {ShirtOrder} from '../models/ShirtOrder';

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
  console.log(JSON.stringify(registerationData, null, 4));

  console.log(registerationData.firstName);
  console.log(registerationData.lastName);
  console.log(registerationData.email);
  console.log(registerationData.seatingGroup);
  console.log(registerationData.alcohol);
  console.log(registerationData.text);

  alert(JSON.stringify(registerationData, null, 4));
  // console.log(JSON.stringify(registerationData, null, 4));console.log(JSON.stringify(registerationData, null, 4));
  

  
  try {
    const resp = await fetch(
      `${API_URL}/api/RegistrationData/CreateRegistration`,
      {
        headers: {
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(registerationData),
      },
    );
  } catch (e) {}
  return null;
};

export const getShirtOrders = async () : Promise<ShirtOrder[]> => {
  try {
    const resp = await fetch(
      `${API_URL}/api/ShirtOrders`,
    );
    const data = await resp.json();
    return data;
  } catch(e) {
    return [];
  }
}

export const postShirtOrder = async(
  orderData: ShirtOrder,
): Promise<null> => {
  console.log(orderData.firstName);
  console.log(orderData.lastName);
  console.log(orderData.email);
  console.log(orderData.size);

  try {
    const resp = await fetch(
      `${API_URL}/api/ShirtOrders`,
      {
        headers: {
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(orderData),
      }
    );
    const data = await resp.json();
    return data;
  } catch(e) {
    return null;
  }
}