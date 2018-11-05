import * as React from 'react';
import {ApoptoosiContactInformation, IApoptoosiContactInformationProps} from './ApoptoosiContantInformation';

interface IApoptoosiContactInformationTableProps {
    contacts: IApoptoosiContactInformationProps[];
}

export const ApoptoosiContactInformationTable: React.SFC<IApoptoosiContactInformationTableProps> = ({contacts}) => (
    
    <div>

        <div id="Toimikunta">
            <h4>
                Ota yhteyttä!
            </h4>
            <h6>
                Apoptoositoimikunta:
            </h6>
            <h6>
                apoptoosi@inkubio.fi
            </h6>
        </div>
        {/* <table>
        <tbody>
        <tr>
            <td></td>
            <td>
                <h4>
                    Ota yhteyttä!
                </h4>
                <h6>
                    Apoptoostoimikunta:
                </h6>
                <h6>
                    apoptoosi@inkubio.fi
                </h6>
            </td>
            <td></td>
        </tr>
        </tbody>
        </table> */}   
        <table>
        <tbody>
        <tr>
        {
        contacts.map(
            elem => 
                <td>
                    <ApoptoosiContactInformation 
                                name={elem.name} 
                                email={elem.email} 
                                phoneNumber={elem.phoneNumber} 
                    />
                </td>
        )
        }
        </tr>
        </tbody>
        </table>
    </div>
);
