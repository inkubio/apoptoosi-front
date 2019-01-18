
import * as React from 'react';

export const ApoptoosiApoptoosiXv = ({language}) => {

    if(language) {
        return (
        <>
            <h1>Apoptoosi XV</h1>
            <p className="bulkText">
            Vuosijuhla on killan tapahtumista hienoin ja juhlallisin. 
            Inkubion 15. vuosijuhlia vietetään lauantaina 2.3.2019 ja 
            juhlintaa jatketaan silliaamiaisella sunnuntaina 3.3.2019.
            Juhlat alkavat cocktailtilaisuudella <b>Trap Factorylla </b>osoitteessa 
            Metallimiehenkuja 6, Espoo. Tarjoilujen ja lahjojenannon jälkeen siirrytään 
            cocktailtilaisuudesta kuljetuksella pääjuhlapaikalle. Pääjuhlaa 
            vietetään <b>Kulosaaren Kasinolla</b> osoitteessa Hopeasalmenpolku 1, Helsinki. Pääjuhlan 
            jälkeen ilta jatkuu kuljetuksen vieden juhlavieraat jatkopaikkaan X. 
            Seuraavana päivänä henkistä ja fyysistä hyvinvointia hellitään silliksellä 
            paikassa Y, jonne vieraat pääsevät bussikuljetuksella Otaniemestä.
            Vuosijuhla on iltapukujuhla, jossa asuna on frakki tai tumma puku 
            tai pitkä iltapuku. Lisäksi juhlapukuja koristavat akateemiset 
            kunniamerkit.
            <br/><br/>
            Illalliskortti maksaa opiskelijalle 75 euroa ja valmistuneelle 100 euroa. Sillisaamiainen kustantaa 20 euroa.
            </p>
            <h1>Aikataulu</h1>
            <div className="overflowDiv">
                <table className="table">
                <thead>
                    <tr>
                        <th>Päivämäärä</th>
                        <th>Aika</th>
                        <th>Tapahtuma</th>
                        <th>Paikka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lauantai 2.3.2019</td>
                        <td>15:00</td>
                        <td>Cocktailtilaisuus</td>
                        <td>Trap Factory,<br/>
                            Metallimiehenkuja 6,
                            02150 Espoo
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>18:00</td>
                        <td>Pääjuhla</td>
                        <td>Kulosaaren Casino,<br/>
                            Hopeasalmenpolku 1,
                            00570 Helsinki
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>24:00</td>
                        <td>Jatkot</td>
                        <td>Paikka X</td>
                    </tr>
                    <tr>
                    <td>Sunnuntai 3.3.2019</td>
                    <td>12:00</td>
                    <td>Silliaamiainen</td>
                    <td>Paikka Y</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </>
        );
    }
    else {
        return (
        <>
            <h1>Apoptoosi XV</h1>
            <p className="bulkText">
            The annual ball is the finest and most formal event held by 
            the Inkubio guild. It is a white tie event, which means that the 
            men wear a dark suit and the women an evening dress. In addition 
            the academic honours are included in the dress code. The annual 
            ball starts with a cocktail event at <b>Trap Factory </b>
            (Metallimiehenkuja 6, Espoo) and is followed by main event and
             eventually an after party. There is an organised transport from 
             the cocktail party to the main event. The main event is held at 
             <b>Kulosaari Casino</b> (Hopeasalmenpolku 1, Helsinki). After this the 
             means of transport will take the guests to the after party at 
             place X. Next morning, the physical and mental wellbeing of the 
             guests is treated in the sillis breakfast at place Y where the 
             guests will be transported by bus from Otaniemi.

            </p>

            <h1>Timetable</h1>
            <div className="overflowDiv">
            <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Venue</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Saturday 2.3.2019</td>
                    <td>15:00</td>
                    <td>Cocktailparty</td>
                    <td>Trap Factory,<br/>
                        Metallimiehenkuja 6,
                        02150 Espoo
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>18:00</td>
                    <td>Main party</td>
                    <td>Kulosaaren Casino,<br/>
                        Hopeasalmenpolku 1,
                        00570 Helsinki
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>24:00</td>
                    <td>Afterparty</td>
                    <td>Place X</td>
                </tr>
                <tr>
                  <td>Sunday 3.3.2019</td>
                  <td>12:00</td>
                  <td>Sillis</td>
                  <td>Place Y</td>
                </tr>
            </tbody>
            </table>
            </div>
        </>
    );
    }
}