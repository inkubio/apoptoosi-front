
import * as React from 'react';

export const ApoptoosiApoptoosiXv = ({language}) => {

    if(language) {
        return (
        <>
            <h1>Apoptoosi XV</h1>
            <p className="bulkText">
                Vuosijuhla on killan tapahtumista hienoin ja juhlallisin. 
                Inkubion 15. vuosijuhlia vietetään lauantaina 2.3.
    
                Juhlat alkavat cocktailtilaisuudella A Grid:ssa, 
                osoitteessa Otakaari 5. Tarjoilujen ja lahjojenannon 
                jälkeen siirrytään cocktailtilaisuudesta kuljetuksella pääjuhlapaikalle.
                Pääjuhlaa vietetään Kulosaaren Casinolla osoitteessa Hopeasalmenpolku 1.
                Pääjuhlan jälkeen ilta jatkuu kuljetuksen vieden juhlavieraat jatkopaikkaan X.
    
                Vuosijuhla on iltapukujuhla, jossa miehillä on asuna tumma puku ja naisilla pitkä 
                iltapuku. Lisäksi juhlapukuja koristaa akateemiset kunniamerkit. 
    
            </p>
        </>
        );
    }
    else {
        return (
        <>
            <h1>Apoptoosi XV</h1>
            <p className="bulkText">
            The annual ball is the most finest and formal event held by the Inkubio guild. 
            It is a white tie event, which means that the men wear a dark suit and the 
            women an evening dress. In addition the academic honours are included in 
            the dress code. The annual ball starts with a cocktail event at A Grid 
            (Otakaari 5) and is followed by main event and eventually an after party. 
            There is an organised transport from the cocktail party to the main event. 
            The main event is held at Kulosaari Casino (Hopeasalmenpolku 1). 
            After this the means of transport will take the guests to the after party 
            at place X.
            </p>
        </>
    );
    }
}