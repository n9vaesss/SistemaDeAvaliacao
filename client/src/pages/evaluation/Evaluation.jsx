import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import Nav from '../../components/nav/Nav'

import Info from '../../components/info/Info'
import EvaluationForm from "../../components/evaluationComponents/EvaluationForm";


const Evaluation = props =>{

    let history = useHistory() 

    const [cookies, setCookie, removeCookie] = useCookies(["regEva"]);

    const [listInfo, setListInfo] = useState()

    useEffect(() => {

        if(cookies.permission != 2){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        Axios.post("http://172.22.10.83:3334/InfoCommittee",{
            regcommittee: cookies.regEva,
        }).then((response) =>{
            setListInfo(response.data)
        })
    }, [])

    return(
        <div>
            <Nav/>

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
                    anexo = {"ANEXO II"}
                    ></Info>
                }) }
            </div>

            <div className="div-main-commitee">
                <EvaluationForm/>
            </div>
        </div>
    )
}

export default Evaluation