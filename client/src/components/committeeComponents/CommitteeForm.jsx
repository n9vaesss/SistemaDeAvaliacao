import React, {useState} from 'react'

import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import Axios from "axios";
import Questions from '../questionComponents/Questions';


const CommitteeForm = (props) =>{
    
    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["regComi, registry"]);

    function provideInfo (ino, dis, ass, comp, flex, prep, rel, plan, pont, cont){
        Axios.post("http://localhost:3001/insertCommittee",{
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
            regcommittee: cookies.regComi,
        })
        
        Axios.put("http://localhost:3001/updateChecklistCommittee",{
            regcommittee: cookies.regComi,

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

export default CommitteeForm