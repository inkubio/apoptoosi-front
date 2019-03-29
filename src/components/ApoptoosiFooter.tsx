import * as React from 'react';

interface IApoptoosiFooter {

    urls: string[];

    language: boolean;
}
// The RemoteA is first in a list of strings

export const ApoptoosiFooter: React.SFC<IApoptoosiFooter> = ({urls, language}) => {

    // const urlsTuples = parseUrls(urls);
    // True for finnish
    if(language){
        return(
            <>
            <footer>
                <div className="MainSponsor">
                    <h1>Pääyhteistyökumppani</h1>
                    <img src={urls[0]}></img>
                </div>
                <section className="SponsorFooter">
                <h1>Juhlavuotta tukemassa</h1>
                {
                    // Take all but first
                    urls.slice(1).map(
                        elem => {
                            return(
                                    <img src={elem}></img>
                                )
                        }
                    )
                }
                </section>
            </footer>                
        </>);
    } else {
        return(
            <>
            <footer>
                <div className="MainSponsor">
                    <h1>Main sponsor</h1>
                    <img src={urls[0]}></img>
                </div>
                <section className="SponsorFooter">
                <h1>Supporting the celebratory year</h1>
                {
                    // Take all but first
                    urls.slice(1).map(
                        elem => {
                            return(
                                    <img src={elem}></img>
                                )
                        }
                    )
                }
                </section>
            </footer>                
        </>);
    }
    ;
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