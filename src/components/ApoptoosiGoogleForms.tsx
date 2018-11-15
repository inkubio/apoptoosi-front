

import * as React from 'react';

interface IApoptoosiGoogleFormsProps {
    url: string;
}

export const ApoptoosiGoogleForms: React.SFC<IApoptoosiGoogleFormsProps> = ({url}) => 
(
    <>
    {/* <iframe src={url} width="640" height="1023" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
    <form className="form" action={url + '/formResponse'}>
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
)