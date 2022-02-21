import React, { useState, useEffect } from "react";

import Axios from "axios"
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import PrintEvaluation from "../../components/printComponents/printEvaluation/PrintEvaluation";
import NamesPrint from "../../components/printComponents/namesPrint/NamesPrint";
import PrintInfo from "../../components/printComponents/PrintInfo";
import Total from "../../components/printComponents/total/Total";

import Logo from "../../images/Logo1.png"

import './Print.css'

const Print = (props) => {

    let history = useHistory()

    const [cookies, setCookie] = useCookies(["searchReportsuperior, searchReport, totalSelf, totalEvaluation, totalCommitte"]);

    const [listprintInformation, setListprintInformation] = useState()

    const [listprintSelftEvaluation, setListprintSelftEvaluation] = useState()

    const [listprintEvaluation, setListprintEvaluation] = useState()

    const [listprintCommitteeEvaluation, setListprintCommitteeEvaluation] = useState()

    useEffect(() => {

        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        Axios.post("http://172.22.10.83:3334/printInformation", {
            searchReport: cookies.searchReport,
        }).then((response) => {
            setListprintInformation(response.data)
        })

        Axios.post("http://172.22.10.83:3334/printSelftEvaluation", {
            searchReport: cookies.searchReport,
        }).then((response) => {
            setListprintSelftEvaluation(response.data)
        })

        Axios.post("http://172.22.10.83:3334/printEvaluation", {
            searchReport: cookies.searchReport,
            searchReportsuperior: cookies.searchReportsuperior,
        }).then((response) => {
            setListprintEvaluation(response.data)
        })

        Axios.post("http://172.22.10.83:3334/printCommitteeEvaluation", {
            searchReport: cookies.searchReport,
        }).then((response) => {
            setListprintCommitteeEvaluation(response.data)
        })
    }, [])
    

    return (

        <div>


            <div className="main-print">

                <img className="img-escutcheon-print" src={Logo} alt="Logo de Guararema" />

                <div className="align-print">

                    <h2 style={{width: "600px"}} >Avaliação/Analise de Desempenho 2021</h2>

                    <div>
                        {typeof listprintInformation !== "undefined" && listprintInformation.map((value) => {
                            return <PrintInfo
                                key={value.registro_id_pk}
                                listInfo={listprintInformation}
                                setListInfo={setListprintInformation}
                                nome={value.serv_nome}
                                registro={value.registro_id_pk}
                                cargo={value.serv_cargo}
                                secretaria={value.serv_secretaria}
                            ></PrintInfo>
                        })}
                    </div>

                    <h1 className="name-print">Autoavaliação</h1>
                    <div className="align-print-grid-container">
                        <div className="align-namesprint">
                            <NamesPrint />
                        </div>
                        <div className="align-evaluation">
                            {typeof listprintSelftEvaluation !== "undefined" && listprintSelftEvaluation.map((value) => {
                                return <PrintEvaluation
                                    key={value.registro_id_pk}
                                    listInfo={listprintSelftEvaluation}
                                    setListInfo={setListprintSelftEvaluation}
                                    inovacao={value.sc_inovacao}
                                    disciplina={value.sc_disciplina}
                                    assiduidade={value.sc_assiduidade}
                                    compromisso={value.sc_compromisso_prof}
                                    flexibilidade={value.sc_flexibilidade}
                                    preparo={value.sc_preparo_prof}
                                    relacoes={value.sc_relacoes_interpessoais}
                                    planejamento={value.sc_planejamento}
                                    pontualidade={value.sc_pontualidade}
                                    controle={value.sc_controle_emocional}
                                    nameTotal="totalSelf"
                                    total={value.sc_total}
                                ></PrintEvaluation>
                            })}
                        </div>
                    </div>


                    <h1 className="name-print">Avaliação do Superior</h1>
                    <div className="align-print-grid-container">
                        <div className="align-namesprint">
                            <NamesPrint />
                        </div>
                        <div className="align-evaluation">
                            {typeof listprintEvaluation !== "undefined" && listprintEvaluation.map((value) => {
                                return <PrintEvaluation
                                    key={value.registro_id_pk}
                                    listInfo={listprintEvaluation}
                                    setListInfo={setListprintEvaluation}
                                    inovacao={value.sc_inovacao}
                                    disciplina={value.sc_disciplina}
                                    assiduidade={value.sc_assiduidade}
                                    compromisso={value.sc_compromisso_prof}
                                    flexibilidade={value.sc_flexibilidade}
                                    preparo={value.sc_preparo_prof}
                                    relacoes={value.sc_relacoes_interpessoais}
                                    planejamento={value.sc_planejamento}
                                    pontualidade={value.sc_pontualidade}
                                    controle={value.sc_controle_emocional}
                                    nameTotal="totalEvaluation"
                                    total={value.sc_total}
                                ></PrintEvaluation>
                            })}
                        </div>
                    </div>

                    <h1 className="name-print">Comissão</h1>
                    <div className="align-print-grid-container">
                        <div className="align-namesprint">
                            <NamesPrint />
                        </div>
                        <div className="align-evaluation">
                            {typeof listprintCommitteeEvaluation !== "undefined" && listprintCommitteeEvaluation.map((value) => {
                                return <PrintEvaluation
                                    key={value.registro_id_pk}
                                    listInfo={listprintCommitteeEvaluation}
                                    setListInfo={setListprintCommitteeEvaluation}
                                    inovacao={value.sc_inovacao}
                                    disciplina={value.sc_disciplina}
                                    assiduidade={value.sc_assiduidade}
                                    compromisso={value.sc_compromisso_prof}
                                    flexibilidade={value.sc_flexibilidade}
                                    preparo={value.sc_preparo_prof}
                                    relacoes={value.sc_relacoes_interpessoais}
                                    planejamento={value.sc_planejamento}
                                    pontualidade={value.sc_pontualidade}
                                    controle={value.sc_controle_emocional}
                                    nameTotal="totalCommitte"
                                    total={value.sc_total}
                                ></PrintEvaluation>
                            })}
                        </div>
                    </div>

                    <div>
                        <Total/>
                    </div>

                    <h2 style={{marginTop: "25px"}} >Assinatura da Comissão</h2>

                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                    <hr style={{marginTop: "25px"}} width = {'300px'} size = {'1'}/>
                </div>

            </div>
        </div>
    )
}

export default Print