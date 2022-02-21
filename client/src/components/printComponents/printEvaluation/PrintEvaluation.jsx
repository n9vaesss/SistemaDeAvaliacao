import React from "react";

import { useCookies } from "react-cookie";

import Result from "../../results/Result";


import './PrintEvaluation.css'


const PrintSelftEvaluation = (props) => {

    const [cookies, setCookie] = useCookies([" totalSelf, totalEvaluation, totalCommitte"]);

    const vets = [
        props.inovacao,
        props.disciplina,
        props.assiduidade,
        props.compromisso,
        props.flexibilidade,
        props.preparo,
        props.relacoes,
        props.planejamento,
        props.pontualidade,
        props.controle,
    ]

    const vetor = vets.map(vet => {
        return <Result value={vet} class = {"pline"} />
    })
    
    setCookie(props.nameTotal, props.total, { path: "/" });


    return (
        <div className="main-selfEvaluation">
            {vetor}
        </div>
    )
}

export default PrintSelftEvaluation