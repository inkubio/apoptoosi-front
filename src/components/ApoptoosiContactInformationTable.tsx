import * as React from 'react';
import {ApoptoosiContactInformation, IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';

// interface IApoptoosiContactInformationTableProps {
//     // contacts: IApoptoosiContactInformationProps[];
//     language: boolean;
// }

export const ApoptoosiContactInformationTable = ({language}) => {
    
    if(language) {
        return(
            <div>
            <div id="Toimikunta">
                <h4>
                    Ota yhteyttä!
                </h4>
                <h6>
                    apoptoosi@inkubio.fi
                </h6>
            </div>
        </div>
        )
    } else {
        return(
        <div>
        <div id="Toimikunta">
            <h4>
                Contact us!
            </h4>
            <h6>
                apoptoosi@inkubio.fi
            </h6>
            </div>
        </div>
        );
    }
};
