import React from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import LoginForm from "../loginForm/LoginForm";

 
const LoginRight = (props) => {

    let history = useHistory() 

    const [cookies, setCookie] = useCookies(["registry, permission, checkEva"]);

    const handleClickLogin = (registry, password) =>{
        Axios.post("http://172.22.10.83:3334/login",{
            registry:registry,
            password:password,
        }).then((response) =>{
            if( response.data.msg == 0 ){
                alert("Usuario ou senha incorreta");
            }else{
                setCookie("registry", response.data[0].registro_id_pk, { path: "/" });
                setCookie("permission", response.data[0].serv_superior, { path: "/" });
                history.push('/home')
            }
        })

        Axios.post("http://172.22.10.83:3334/checklist",{
            registry:registry,
        }).then((response) =>{
            try{
                setCookie("checkEva", response.data[0].serv_auto_avaliacao, { path: "/" });
            }catch(error){}
        })
    }

    return (
        <div>
            <LoginForm submitForm = {handleClickLogin} />
        </div>
    )
}

export default LoginRight