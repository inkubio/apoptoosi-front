import * as React from 'react';
// import {Link} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
interface IApoptoosiLinksProps {
    
    // urls: string[];

    // changePage: () => void;

}

export const ApoptoosiLinks: React.SFC<IApoptoosiLinksProps> = /*{urls, changePage})*/ () => {
    return (
        <>
        {/* <ul className="nav-list">
            {

                urls.map(
                    e => {
                        return(
                                <li className="nav-list-item"><a href={'#' + e}>{e}</a></li>
                        )
                    }
                )

            }
            </ul> */}

        <ul className="nav-list">
            <li className="nav-list-item"><Link to="/#Juhlavuosi">Juhlavuosi</Link></li>
            <li className="nav-list-item"><Link to="/#ApoptoosiXV">ApoptoosiXV</Link></li>
            <li className="nav-list-item"><Link to="/registeration">Ilmoittautuminen</Link></li>
            <li className="nav-list-item"><Link to="/#Yhteystiedot">Yhteystiedot</Link></li>
        </ul>

        </>
    )
}