import * as React from 'react';

interface IApoptoosiContactInformationProps {
    name: string;
    email: string;
    phoneNumber: string;
}

export const ApoptoosiContactInformation: React.SFC<IApoptoosiContactInformationProps>
= (
    {name, email, phoneNumber}
) => (
    <>
    <div className="ContactInformation">
        <h5>{name}</h5>
        <h6>{email}</h6>
        <h6>{phoneNumber}</h6>
    </div>
    </>
);

