import * as React from 'react';



export const ApoptoosiCelebYear = ({language}) => {
    if(language) {
        return(
            <div>
                <h1>Juhlavuosi</h1>
                {/* <h3>Inkubio15-paita</h3>
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
                </p> */}
                {/* <h3>Juhlavuoden tapahtumat</h3> */}
                <p className="bulkText">
                    Aalto-yliopiston bioinformaatioteknologian ainejärjestö 
                    Inkubio täyttää 15 vuotta vuonna 2019. Tätä merkittävää 
                    tapahtumaa juhlistetaan 2.3. Inkubion vuosijuhlissa, 
                    Apoptoosi XV:ssa. Tänä vuonna juhlinta ei rajoitu pelkästään 
                    itse vuosijuhlapäivään, vaan Inkubio 15 -juhlahumua on 
                    havaittavissa jo useissa tapahtumissa pitkin talvea.
                </p>
                <h3>Vuosijuhlaviikko</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Päivämäärä</th>
                                <th>Tapahtuma</th>
                                <th>Tila</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Maanantai 25.2.2019</td>
                                <td>Virpin läpilaulanta</td>
                                <td>Ossinsauna</td>
                            </tr>
                            <tr>
                                <td>Keskiviikko 27.2.2019</td>
                                <td>Tanssi- ja tapakoulutus</td>
                                <td>OUBS studio</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        )
    } else {
        return(
            <div>
            <h1>Celebaritory year</h1>
            {/* <h3>Inkubio15-shirt</h3>
            <p className="bulkText">
            A new addition to the Inkubio’s 15th celebration year is the Apoptoosi XV- shirt! 
            Now everyone can buy an own college shirt in green colour, embellished with 
            Inkubio’s electric circuit pattern. Perhaps you have already seen the apoptoosi officials wearing these shirts?
            </p> */}
            {/* <h3>Events</h3> */}
            <p className="bulkText">
            Inkubio, student organization of bioinformation technology in 
            Aalto University, celebrates its 15th anniversary during the year 2019. 
            The most important event of the jubileum year is the Annual Ball Apoptoosi XV
            on March 2nd, 2019. Though, the celebrations continue throughout the year in different events.
            </p>
            <h3>Annual ball week</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Premise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday 25.2.2019</td>
                        <td>Carol of Virpi</td>
                        <td>Ossinsauna</td>
                    </tr>
                    <tr>
                        <td>Webnesday 27.2.2019</td>
                        <td>Dance and manner traimning</td>
                        <td>OUBS studio</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}
