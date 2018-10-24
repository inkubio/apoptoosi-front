import * as React from 'react';
import {ApoptoosiContactInformation} from './ApoptoosiContantInformation';

interface IApoptoosiContactInformationTableProps {
    contacts: [
        ApoptoosiContactInformation("Linda Wederhorn", "linda.wederhorn@aalto.fi", "050 4033 693"),
    ];
}

export class ApoptoosiContactInformationTable extends React.Component<IApoptoosiContactInformationTableProps> {
    constructor(props) {
        super(props);
        this.state = {
            contact: this.props.contacts,
        }
    }
}