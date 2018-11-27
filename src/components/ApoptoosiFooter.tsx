import * as React from 'react';

interface IApoptoosiFooter {

    urls: string[];

}

export const ApoptoosiFooter: React.SFC<IApoptoosiFooter> = ({urls}) => {

    const urlsTuples = parseUrls(urls);

    return(
        <>
        <h1>Juhlavuotta tukemassa:</h1>
        <footer>
            <table className="footerTable">
            {
                
                urlsTuples.map(
                    elem => {
                        return(
                            <tr>
                                <td>
                                    <img className="footerImage" src={elem.first}></img>
                                </td>
                                <td>
                                    <img className="footerImage" src={elem.second}></img>
                                </td>
                            </tr>
                            )
                    }
                )
            }
            <tr>
                <td>
                    <img className="footerImage" src={urls[-1]}></img>
                </td>
            </tr>
            </table>
        </footer>                
    </>
    );
}

const parseUrls = (urls: string[]) => {

    var i = 0;
    var ret = [];
    for(;i < urls.length; ++i){

        if(i % 2 === 0) {
            ret.push({first: urls[i], second: urls[i + 1]})
        }

    }
    return ret;
}