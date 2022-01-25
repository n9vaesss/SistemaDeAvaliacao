import React from "react";

import './Info.css'

const Info = (props) =>{
    return(
        <div className="info-main-container">
            <h1>{props.anexo}</h1>
            <h1>AVALIAÇÃO/ANALISE DE DESEMPENHO - 2022</h1>
            <h1>{props.nome}</h1>
            <h1>{props.cargo}</h1>
            <h1>{props.secretaria}</h1>
            <h1>{props.local}</h1>
        </div>
    )
}

export default Info;