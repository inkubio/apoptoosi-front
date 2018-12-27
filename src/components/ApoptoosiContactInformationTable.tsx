import * as React from 'react';
import {ApoptoosiContactInformation, IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';

interface IApoptoosiContactInformationTableProps {
    // contacts: IApoptoosiContactInformationProps[];
}

export const ApoptoosiContactInformationTable: React.SFC<IApoptoosiContactInformationTableProps> = ({language}) => (
    
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
