

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
            <ul>
                <li>
                    <label>Nimi</label>
                    <input name="entry.700536277" type="text" required />
                </li>
                <li>
                    <label>Sähköposti</label>
                    <input name="entry.1543381985" type="email" required />
                </li>
                <li>
                    <label>Koko</label>
                    <select name="entry.1260883230">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option> 
                    </select>
                </li>
                <li>
                    <input type="submit" value="Lähetä" />
                </li>
            </ul>
            </fieldset>
        </form>
        </>
    );
}