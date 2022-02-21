import React from "react";

import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import Axios from "axios";
import Questions from '../questionComponents/Questions';

const SelftForm = (props) =>{

    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["registry"]);

    function provideInfo (ino, dis, ass, comp, flex, prep, rel, plan, pont, cont){
        Axios.post("http://172.22.10.83:3334/insertSelf",{
            registry: cookies.registry,
            ino:ino,
            dis:dis, 
            ass: ass, 
            comp: comp, 
            flex: flex, 
            prep: prep, 
            rel: rel, 
            plan: plan, 
            pont: pont, 
            cont: cont,
        })
        
        Axios.put("http://172.22.10.83:3334/updateChecklistSelf",{
            registry: cookies.registry,

        }).then((response) =>{
            alert("Formulário preenchido com sucesso! ")
            history.push('/home')
        })
    }

    return(
        <div>
            <Questions onClick = { provideInfo } />
        </div>
    )
}

export default SelftForm;