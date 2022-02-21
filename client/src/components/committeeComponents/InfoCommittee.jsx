import React from "react";
import Result from "../results/Result";


const InfoCommittee = props =>{
    return(
        <div className="infoCommittee-main">
            
            <table className="menu" style = {{top: props.top}}>
            <p className="titleinfo">{props.title}</p>
                <tr>
                    <td>1 - INOVAÇÃO</td>
                    <td className = "td_part"><Result value = {props.inovacao} class = {"none"}/></td>
                </tr>

                <tr>
                    <td>2 - DISCIPLINA</td>
                    <td className = "td_part"><Result value = {props.disciplina}/></td>
                </tr>

                <tr>
                    <td>3 - ASSIDUIDADE</td>
                    <td className = "td_part"> <Result value = {props.assiduidade}/></td>
                </tr>

                <tr>
                    <td>4 - COMPROMISSO PROFISSIONAL</td>
                    <td className = "td_part"><Result value = {props.compromisso}/></td>
                </tr>

                <tr>
                    <td>5 - FLEXIBILIDADE</td>
                    <td className = "td_part"><Result value = {props.flexibilidade}/></td>
                </tr>

                <tr>
                    <td>6 - PREPARO PROFISSIONAL</td>
                    <td className = "td_part"><Result value = {props.prepraro}/></td>
                </tr>

                <tr>
                    <td>7 - RELAÇÕES INTERPESSOAIS</td>
                    <td className = "td_part"><Result value = {props.relacoes}/></td>
                </tr>

                <tr>
                    <td>8 - PLANEJAMENTO</td>
                    <td className = "td_part"><Result value = {props.planejamento}/></td>
                </tr>

                <tr>
                    <td>9 - PONTUALIDADE</td>
                    <td className = "td_part"><Result value = {props.pontualidade}/></td>
                </tr>

                <tr>
                    <td>10 - CONTROLE EMOCIONAL</td>
                    <td className = "td_part"> <Result value = {props.controle}/></td>
                </tr>
            </table>
        </div>
        
    )
}

export default InfoCommittee