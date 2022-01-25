import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';
import Info from '../../components/info/Info'

import Nav from '../../components/nav/Nav'
import SelftForm from "../../components/selfComponents/SelfForm";

const Self = (props) =>{

    let history = useHistory() 

    const [cookies, setCookie, removeCookie] = useCookies(["registry, checkEva"]);

    const [listInfo, setListInfo] = useState()

    useEffect(() => {
        if(cookies.checkEva == 1){
            alert('Autoavaliação ja foi concluida!')
            history.push('/home')
        }
        Axios.post("http://localhost:3001/InfoSelf",{
            registry: cookies.registry,
        }).then((response) =>{
            setListInfo(response.data)
        })


    }, [])

    return(
        <div>
            <Nav/>

            <div className="div-info-committee" > 
                {typeof listInfo !== "undefined" && listInfo.map((value) =>{
                    return <Info
                    key={value.registro_id_pk} 
                    listInfo = {listInfo} 
                    setListInfo = {setListInfo}
                    nome = {value.serv_nome}
                    cargo = {value.serv_cargo}
                    secretaria = {value.serv_secretaria}
                    local = {value.serv_local_trabalho}
                    anexo = {"ANEXO I"}
                    ></Info>
                }) }
            </div>

            <div className="div-main-commitee">
                <SelftForm/>
            </div>

        </div>
    )
}

export default Self