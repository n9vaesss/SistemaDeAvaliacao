import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import Nav from '../../components/nav/Nav'
import CommitteeForm from '../../components/committeeComponents/CommitteeForm'
import Info from '../../components/info/Info'

import './Committee.css'

const Committee = props =>{

    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["regComi"]);

    const [listInfo, setListInfo] = useState()

    useEffect(() => {

        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        Axios.post("http://localhost:3001/InfoCommittee",{
            regcommittee: cookies.regComi,
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
                    anexo = {"ANEXO III"}
                    ></Info>
                }) }
            </div>

            <div className="div-main-commitee">
                <CommitteeForm/>
            </div>
        </div>
    )
}

export default Committee