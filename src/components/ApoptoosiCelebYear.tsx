import * as React from 'react';



export const ApoptoosiCelebYear = ({language}) => {
    if(language) {
        return(
            <div>
                <h1>Juhlavuosi</h1>
                <h3>Inkubio15-paita</h3>
                <p className="bulkText">
                Aalto-yliopiston bioinformaatioteknologian ainejärjestö 
                Inkubio täyttää 15 vuotta vuonna 2019. Tätä merkittävää 
                tapahtumaa juhlistetaan 2.3. Inkubion vuosijuhlissa, 
                Apoptoosi XV:ssa. Tänä vuonna juhlinta ei rajoitu pelkästään 
                itse vuosijuhlapäivään, vaan Inkubio 15 -juhlahumua on havaittavissa 
                jo useissa tapahtumissa pitkin talvea. 
                15-vuotisjuhlavuoden uutuutena on Apoptoosi XV-juhlapaidat! 
                Nyt jokaisella on mahdollisuus saada itselleen Inkubion väreihin sopiva vihreä, 
                virtapiirikuvioilla koristeltu college-paita. Ehkä olet jo bongannut 
                paidan Apoptoosi-toimihenkilöiden päällä? 
                </p>
                <h3>Juhlavuoden tapahtumat</h3>

                <h3>Vuosijuhlaviikko</h3>
            </div>
        )
    } else {
        return(
            <div>
            <h1>Celebaritoyry year</h1>
            <h3>Inkubio15-shirt</h3>
            <p className="bulkText">
            A new addition to the Inkubio’s 15th celebration year is the Apoptoosi XV- shirt! 
            Now everyone can buy an own college shirt in green colour, embellished with 
            Inkubio’s electric circuit pattern. Perhaps you have already seen the apoptoosi officials wearing these shirts?
            </p>
            <h3>Events</h3>

            <h3>Annual ball week</h3>
        </div>
        );
    }
}
