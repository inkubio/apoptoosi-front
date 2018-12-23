
import * as React from 'react';
import {ApoptoosiCelebYear} from './ApoptoosiCelebYear';
import {ApoptoosiApoptoosiXv} from './ApoptoosiApoptoosiXv';
import {ApoptoosiContactInformationTable} from './ApoptoosiContactInformationTable';

export const ApoptoosiDefaultPage: React.SFC = () => {

        return(
            <>
                <section id="Juhlavuosi" className="CelebYear">
                    <ApoptoosiCelebYear />
                </section>
        
                <section id="ApoptoosiXV" className="ApoptoosiXV">
                    <ApoptoosiApoptoosiXv />
                </section>
        
                <section id="Yhteystiedot" className="ContactInformation">
                    <ApoptoosiContactInformationTable />
                </section>
            </>
          );
}