import React, { useState, useEffect } from "react";

import { useCookies } from "react-cookie";

import './Total.css'

const Total = props =>{

    const [cookies, setCookie] = useCookies([" totalSelf, totalEvaluation, totalCommitte"]);

    const [total, settotal] = useState(( parseInt(cookies.totalSelf) + parseInt(cookies.totalEvaluation) + parseInt(cookies.totalCommitte) ) / 3)
    const [totalConcept, settotalConcept] = useState ("")

    useEffect(() =>{
        if(total <= 7 ){
            settotalConcept('Insuficiente')
        }else if ( total <= 16){
            settotalConcept("Regular")
        }else if (total <= 22){
            settotalConcept("Bom")
        }else if (total  <= 26){
            settotalConcept ("Muito Bom")
        }else if (total <= 30){
            settotalConcept ( "Otimo")
        }
    },[total])

    function LoadPage(){

        return(
            <div className="div-main-total">
                <div className="div-one-total">
                    <h3 style={{marginTop: "40px"}}>Total de pontos: {parseFloat(total.toFixed(0))}</h3>
                </div>
                
                <div className="div-tow-total">
                    <h3 style={{marginTop: "40px"}}>Conceito: {totalConcept}</h3>
                </div>
            </div>
        )
    }

    return(
        <>
            <LoadPage/>
        </>
    )
}

export default Total