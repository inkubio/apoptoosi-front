
import * as React from 'react';
import {ApoptoosiCelebYear} from './ApoptoosiCelebYear';
import {ApoptoosiApoptoosiXv} from './ApoptoosiApoptoosiXv';
import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';

import {LanguageContext} from './ApoptoosiMain';
 
interface IApoptoosiDefaultPage {
    // language: boolean;
}

export const ApoptoosiDefaultPage: React.SFC<IApoptoosiDefaultPage> = () => {

        return(
            <LanguageContext.Consumer>
            {({language}) => (
            <div id="DefaultPage">
                <section id="Juhlavuosi" className="CelebYear">
                    <ApoptoosiCelebYear language={language} />
                </section>
        
                <section id="ApoptoosiXV" className="ApoptoosiXV">
                    <ApoptoosiApoptoosiXv language={language} />
                </section>
        
                <section id="Yhteystiedot" className="ContactInformation">
                    <ApoptoosiContactInformationTable language={language} />
                </section>
            </div>)}
            </ LanguageContext.Consumer>
          );
}