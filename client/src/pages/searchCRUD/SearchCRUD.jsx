import React, { useState, useEffect } from "react";

import Axios from "axios";

import Nav from "../../components/nav/Nav";
import ButtonSearch from "../../components/preCommitteeComponentes/ButtonSearch";


const SearchCRUD = props =>{

    const [lisInfoComi, setlisInfoComi] = useState()
    const [search, setsearch] = useState()

    useEffect(() => {

        const params = '%' + search + '%';

        Axios.post("http://172.22.10.83:3334/searchCRUD",{
            params : params,
        }).then((response) => {
            setlisInfoComi(response.data)
        })

    }, [search])
    return(
        <>
           <div className="main-precommittee">
            <Nav/>

                <div className="main-precommittee-align">

                    <h1 style={{marginTop:'30px'}}>Painel de Controle</h1>

                    <h2 style={{marginTop:'30px'}} >Insira o nome, registro ou secretaria do funcionario que deseja editar: </h2>

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
                                caminho = {'infoCRUD'}
                                nameReg = {'regEdit'}
                            ></ButtonSearch>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchCRUD;
