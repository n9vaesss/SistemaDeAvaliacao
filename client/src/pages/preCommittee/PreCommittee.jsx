import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import Nav from '../../components/nav/Nav'

import './PreCommittee.css'
import ButtonSearch from "../../components/preCommitteeComponentes/ButtonSearch";


const PreCommittee = props => {

    let history = useHistory()
    const [cookies, setCookie, removeCookie] = useCookies(["permission"]);
    const [lisInfoComi, setlisInfoComi] = useState()
    const [search, setsearch] = useState()

    useEffect(() => {

        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        const params = '%' + search + '%';

        Axios.post("http://localhost:3001/searchPreCommittee",{
            params : params,
        }).then((response) => {
            setlisInfoComi(response.data)
        })

    }, [search])


    return (
        <div className="main-precommittee">
            <Nav/>

            <div className="main-precommittee-align">

                <h1 style={{marginTop:'30px'}}>Comissão</h1>

                <h2 style={{marginTop:'30px'}} >Insira o nome, registro ou secretaria do funcionario que deseja avaliar: </h2>

                <input
                type="text"
                value =  { search }
                onChange={(ev) => setsearch(ev.target.value)}
                className="input-search-precommittee"
                placeholder="Registro/ Nome/ Secretaria"
                />
                
                <ul>
                    {typeof lisInfoComi !== "undefined" && lisInfoComi.map((values) => {
                        
                        return <ButtonSearch
                            key={values.id} 
                            listInfo = {lisInfoComi} 
                            setListInfo = {setlisInfoComi}
                            name = {values.serv_nome}
                            secretaria = {values.serv_secretaria}
                            registro = {values.registro_id_pk}
                            caminho = {'/comittee'}
                            nameReg = {'regComi'}
                        ></ButtonSearch>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PreCommittee