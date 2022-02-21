import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import Nav from '../../components/nav/Nav'
import CommitteeForm from '../../components/committeeComponents/CommitteeForm'
import Info from '../../components/info/Info'

import './Committee.css'
import InfoCommittee from "../../components/committeeComponents/InfoCommittee";

const Committee = props =>{

    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["regComi"]);

    const [listInfo, setListInfo] = useState()
    const [listInfoSelf, setListInfoSelf] = useState()
    const [listInfoEva, setListInfoEva] = useState()

    useEffect(() => {

        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        Axios.post("http://172.22.10.83:3334/InfoCommittee",{
            regcommittee: cookies.regComi,
        }).then((response) =>{
            setListInfo(response.data)
        })

        Axios.post("http://172.22.10.83:3334/printSelftEvaluation",{
            searchReport: cookies.regComi,
        }).then((response) =>{
            setListInfoSelf(response.data)
        })

        Axios.post("http://172.22.10.83:3334/InfoCommitteeEvaluation",{
            searchReport: cookies.regComi,
        }).then((response) =>{
            setListInfoEva(response.data)
        })
    }, [])

    return(
        <div>
            <Nav/>

            <div className="grid-committee">
                <div>
                    <div className="div-info-committee">
                        {typeof listInfo !== "undefined" && listInfo.map((value) =>{
                            return <Info
                            key={value.registro_id_pk}
                            listInfo = {listInfo}
                            setListInfo = {setListInfo}
                            nome = {value.serv_nome}
                            cargo = {value.serv_cargo}
                            secretaria = {value.serv_secretaria}
                            local = {value.serv_local_trabalho}
                            anexo = {"ANEXO III"}
                            ></Info>
                        }) }
                    </div>
                    <div className="div-main-commitee">
                        <CommitteeForm/>
                    </div>
                </div>
                <div>
                    {typeof listInfoSelf !== "undefined" && listInfoSelf.map((value) =>{
                        return <InfoCommittee
                        key={value.sc_avaliacao_id}
                        listInfo = {listInfoSelf}
                        setListInfo = {setListInfoSelf}
                        title = {"AUTOAVALIAÇÃO"}
                        inovacao = {value.sc_inovacao}
                        disciplina = {value.sc_disciplina}
                        assiduidade ={value.sc_assiduidade}
                        compromisso = {value.sc_compromisso_prof}
                        flexibilidade = {value.sc_flexibilidade}
                        prepraro = {value.sc_preparo_prof}
                        relacoes = {value.sc_relacoes_interpessoais}
                        planejamento = {value.sc_planejamento}
                        pontualidade = {value.sc_pontualidade}
                        controle = {value.sc_controle_emocional}
                        top = {"150px"}
                        ></InfoCommittee>
                    }) }

                    {typeof listInfoEva !== "undefined" && listInfoEva.map((value) =>{
                        return <InfoCommittee
                        key={value.sc_avaliacao_id}
                        listInfo = {listInfoEva}
                        setListInfo = {setListInfoEva}
                        title = {"AVALIAÇÃO DO SUPERIOR"}
                        inovacao = {value.sc_inovacao}
                        disciplina = {value.sc_disciplina}
                        assiduidade ={value.sc_assiduidade}
                        compromisso = {value.sc_compromisso_prof}
                        flexibilidade = {value.sc_flexibilidade}
                        prepraro = {value.sc_preparo_prof}
                        relacoes = {value.sc_relacoes_interpessoais}
                        planejamento = {value.sc_planejamento}
                        pontualidade = {value.sc_pontualidade}
                        controle = {value.sc_controle_emocional}
                        top = {"450px"}
                        ></InfoCommittee>
                    }) }
                </div>
            </div>
        </div>
    )
}

export default Committee