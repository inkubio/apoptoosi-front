import * as React from 'react';

interface IApoptoosiLinksProps {
    
    urls: string[];

}

export const ApoptoosiLinks: React.SFC<IApoptoosiLinksProps> = ({urls}) => {
    return (
        <>
        <ul className="nav-list">
            {

                urls.map(
                    e => {
                        return(
                                <li className="nav-list-item"><a href={'#' + e}>{e}</a></li>
                        )
                    }
                )

            }
            </ul>
        </>
    )
}