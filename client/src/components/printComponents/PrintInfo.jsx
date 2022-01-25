import React from "react";

import '../printComponents/printEvaluation/PrintEvaluation.css'

const PrintInfo = (props) => {
    return (
        <div>
            <div className="print-info-main">
                <div className="print-info-line1">
                    <h1>Nome:</h1>
                    <p>{props.nome}</p>
                    <h1>Registro:</h1>
                    <p>{props.registro}</p>
                </div>
            </div>
            <div className="print-info-main">
            
                <div className="print-info-line1">
                    <h1>Emprego:</h1>
                    <p>{props.cargo}</p>
                    <h1>Secretaria:</h1>
                    <p>{props.secretaria}</p>
                </div>
            </div>
        </div>
    )
}

export default PrintInfo