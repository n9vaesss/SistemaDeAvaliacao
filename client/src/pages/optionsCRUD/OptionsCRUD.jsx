import React from "react";

import Nav from '../../components/nav/Nav'
import { Button } from "../../components/button/Button";

import { useHistory } from 'react-router';

import './OptionsCRUD.css'

const OptionsCRUD  = props =>{

    let history = useHistory()

    const handleSubmitForSearchCRUD = props =>{
        history.push('/searchCRUD');
    }
    return(
        <>
            <Nav/>
            <h1 className="text-optionsCRUD">Selecione uma das opções a baixo.</h1>
            <div className="main-optionsCRUD">
                <div className="align-optionsCRUD">
                
                    <Button
                        text = {"Editar perfil"}
                        className = {"button-optionsCRUD"}
                        onClick = {handleSubmitForSearchCRUD}
                    />
                    <Button
                        text = {"Inserir novo usuario"}
                        className = {"button-optionsCRUD"}
                    />
                </div>
            </div>
        </>
    )
}

export default OptionsCRUD

