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
                <div className="overflowDiv">
                    <h3>Vujukuntoon</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Päivämäärä</th>
                                <th>Tapahtuma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Maanantai 4.2.2019</td>
                                <td>Vujukuntoon: Miekkailu</td>
                                <td>Tapiola</td>
                            </tr>
                            <tr>
                                <td>perjantai 11.2.2019</td>
                                <td>Vujukuntoon: Amerikkalainen jalkapallo</td>
                                <td>Otahalli, Otaranta 6</td>
                            </tr>
                            <tr>
                                <td>Maanantai 18.2.2019</td>
                                <td>Vujukuntoon: Tankotanssi</td>
                                <td>Jämeräntaival 1, yhdistystila</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflowDiv">
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
                                    <td>Tiistai 26.2.2019</td>
                                    <td>Inkubion historian läpiluku</td>
                                    <td>Inkubion kiltahuone</td>
                                </tr>
                                <tr>
                                    <td>Keskiviikko 27.2.2019</td>
                                    <td>Tanssi- ja tapakoulutus</td>
                                    <td>OUBS studio</td>
                                </tr>
                                <tr>
                                    <td>Torstai 28.2.2019</td>
                                    <td>Vujukuntoon jooga</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
            <div className="overflowDiv">
                <h3>Ball of Fitness:</h3>
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
                            <td>Monday 4.2.2019</td>
                            <td>Ball of Fitness:: Fencing</td>
                            <td>Tapiola</td>
                        </tr>
                        <tr>
                            <td>Friday 11.2.2019</td>
                            <td>Ball of Fitness:: American football</td>
                            <td>Otahalli, Otaranta 6</td>
                        </tr>
                        <tr>
                            <td>Monday 18.2.2019</td>
                            <td>Ball of Fitness:: Pole dancing</td>
                            <td>Jämeräntaival 1, club space</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Annual ball week</h3>
            <div className="overflowDiv">
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
                        <td>Thuesday 26.2.2019</td>
                        <td>Perusal of Inkubio's history</td>
                        <td>Guild room of Inkubio</td>
                    </tr>
                    <tr>
                        <td>Webnesday 27.2.2019</td>
                        <td>Dance and manner training</td>
                        <td>OUBS studio</td>
                    </tr>
                    <tr>
                        <td>Thursday 28.2.2019</td>
                        <td>Ball of Fitness: Joga</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        );
    }
}
