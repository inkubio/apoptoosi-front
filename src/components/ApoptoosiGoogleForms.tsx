

import * as React from 'react';

interface IApoptoosiGoogleFormsProps {

    url: string;

    // method: (ref: any) => void;

}

export const ApoptoosiGoogleForms: React.SFC<IApoptoosiGoogleFormsProps> = ({url}) => {
    // const onSubmit = (e: any) => {
    //     e.preventDefault();
    //     const form: any = document.getElementById("kollariform");
    //     fetch(form.action, {
    //         method: 'POST',
    //         body: new FormData(form),
    //     });

    return (
        <>
        <iframe name="noLooktarget" id="noLooktarget" style={{display:'none'}} />
        {/* <iframe src={url} width="640" height="1023" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
        <form className="form" action={url + '/formResponse'} target="noLooktarget" id="kollariform">
            {/* <p>{url}</p> */}
            <fieldset>
                <legend>Paita tilaus</legend>
            <table>
                <tr>
                    <td>
                        <label>Nimi</label>
                    </td>
                    <td>
                        <input name="entry.700536277" type="text" required />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Sähköposti</label>
                    </td>
                    <td>
                        <input name="entry.1543381985" type="email" required />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Koko</label>
                    </td>
                    <td>
                        <select name="entry.1260883230">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option> 
                        </select>
                    </td>
                </tr>
                <li>
                    <input type="submit" value="Lähetä" />
                </li>
            </table>
            </fieldset>
        </form>
        </>
    );
}