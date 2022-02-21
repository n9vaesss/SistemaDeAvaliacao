import React from "react";

import { Button } from "../button/Button";
import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import './Nav.css'

const Nav = (props) =>{

    const [cookies, setCookie, removeCookie] = useCookies(["registry, searchReportsuperior, searchReport, totalSelf, totalCommitte, totalEvaluation, regComi, regEva, permission, checkEva, regEdit"]);

    let history = useHistory()

    const handleSubmitHome = () =>{
        history.push('/home');
    }
    const handleSubmitAuto = () =>{
        if(cookies.checkEva == 1){
            alert('Autoavaliação ja foi concluida!')
            history.push('/home')
        }else{
            history.push('/self');
        }
    }
    const handleSubmitAva = () =>{
        if(cookies.permission != 2){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }else{
            history.push('/preevaluation');
        }
    }
    const handleSubmitComi = () =>{
        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }else{
            history.push('/precomittee');
        }
    }
    const handleSubmitRela = () =>{
        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }else{
            history.push('/report');
        }
    }
    const handleSubmitPainel = () =>{
        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }else{
            history.push('/optionsCRUD');
        }
        
    }
    const handleSubmitSair = () =>{
        removeCookie("registry"); 
        removeCookie("searchReportsuperior"); 
        removeCookie("searchReport"); 
        removeCookie("totalSelf"); 
        removeCookie("totalCommitte");
        removeCookie("totalEvaluation"); 
        removeCookie("regComi");
        removeCookie("regEva");   
        removeCookie("permission"); 
        removeCookie("checkEva");
        removeCookie("regEdit");  
        history.push('/');
    }


    return(
        <div className="main-nav">
            <nav>

                <Button className="nav-button" text = "Home" onClick={handleSubmitHome }/>

                <Button className="nav-button" text = "Autoavaliação" onClick={handleSubmitAuto}/>

                <Button className="nav-button" text = "Avaliação do Superior" onClick={handleSubmitAva}/>

                <Button className="nav-button" text = "Comissão" onClick={handleSubmitComi}/>

                <Button className="nav-button" text = "Relatorios" onClick={handleSubmitRela}/>

                <Button className="nav-button" text = "Painel Administrativo" onClick={handleSubmitPainel}/>

                <Button className="nav-button" text = "Sair" onClick={handleSubmitSair}/>

            </nav>
        </div>
    )
}

export default Nav