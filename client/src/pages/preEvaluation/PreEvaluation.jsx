import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import Nav from '../../components/nav/Nav'
import ButtonSearch from "../../components/preCommitteeComponentes/ButtonSearch";

const PreEvaluation = props => {

    let history = useHistory() 
    const [lisInfoComi, setlisInfoComi] = useState()
    const [search, setsearch] = useState()
    const [cookies, setCookie] = useCookies(["registry, permission"]);

    useEffect(() => {

        if(cookies.permission != 2){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }

        const params = '%' + search + '%';

        Axios.post("http://172.22.10.83:3334/searchPreEvaluation",{
            registry : cookies.registry,
            params : params,
        }).then((response) => {
            setlisInfoComi(response.data)
        })

    }, [search])

    return (
        <div className="main-precommittee">
            <Nav/>

            <div className="main-precommittee-align">

                <h1 style={{marginTop:'30px'}}>Avaliação do Superior</h1>

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
                            caminho = {'/evaluation'}
                            nameReg = {'regEva'}
                        ></ButtonSearch>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PreEvaluation