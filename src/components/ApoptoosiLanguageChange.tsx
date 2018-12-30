import * as React from 'react';



interface IApoptoosiLanguageChange {
  
    lang: boolean;
    /** Send the registeration to the api */
    callback: (event: any) => void;
  }

export const ApoptoosiLanguageChange: React.SFC<IApoptoosiLanguageChange> = ({callback, lang}) => {
    
    return(
        <form className="LanguageChange" onSubmit={callback}>
            <input type="submit" value={lang ? "en" : "fi"}/>
        </form>
    );
}