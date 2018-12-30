import * as React from 'react';
// import {Link} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import {LanguageContext} from './ApoptoosiMain';

interface IApoptoosiLinksProps {
    
    // urls: string[];

    // changePage: () => void;

}

export const ApoptoosiLinks: React.SFC<IApoptoosiLinksProps> = /*{urls, changePage})*/ () => {
    return (
        <LanguageContext.Consumer>
                {({language}) => (
        <ul className="nav-list">
            <li className="nav-list-item"><Link to="/#Juhlavuosi">{ language ? 'Juhlavuosi' : 'Celebratory year' }</Link></li>
            <li className="nav-list-item"><Link to="/#ApoptoosiXV">ApoptoosiXV</Link></li>
            <li className="nav-list-item"><Link to="/registeration">{ language ? 'Ilmoittautuminen' : 'Registeration' }</Link></li>
            <li className="nav-list-item"><Link to="/#Yhteystiedot">{ language ? 'Yhteystiedot' : 'Contact' }</Link></li>
        </ul>)}
        </ LanguageContext.Consumer>

    )
}