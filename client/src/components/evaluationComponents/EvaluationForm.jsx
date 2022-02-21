import React, {useState} from 'react'

import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import Axios from "axios";
import Questions from '../questionComponents/Questions';


const EvaluationForm = (props) =>{
    
    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["regEva, registry"]);

    function provideInfo (ino, dis, ass, comp, flex, prep, rel, plan, pont, cont){
        Axios.post("http://172.22.10.83:3334/insertEvaluation",{
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
            regcommittee: cookies.regEva,
        })
        
        Axios.put("http://172.22.10.83:3334/updateChecklistevaluation",{
            regcommittee: cookies.regEva,

        }).then((response) =>{
            alert("Formulário preenchido com sucesso! ")
            history.push('/home')
        })
    }

    return(

        <div>
            <Questions onClick = { provideInfo }/>
        </div>
    )


}

export default EvaluationForm