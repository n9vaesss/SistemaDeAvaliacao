import React from "react";

import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import Logo from '../../images/Logo1.png'

import Nav from "../../components/nav/Nav";

import './Home.css'

const Home = props =>{

    let history = useHistory() 

    const [cookies, setCookie] = useCookies(["registry"]);

    if(cookies.registry == undefined || cookies.registry == null){
        history.push('/')
    }

    return(
        <div>
            <Nav/>

            <div className="main-home">
                <img src={Logo} alt="Logo de Guararema" className="logo-home"/>
            </div>

            <div className="container-text-home">

                <h1>Avaliação e Análise de Desempenho 2021</h1>
                    <p>
                    Prezado servidor seja bem-vindo!
                    Seguem algumas orientações para a realização da Avaliação/Análise de Desempenho de 2021 que a partir desse ano será realizada de forma eletrônica.
                    O período que será avaliado é de 01/12/2020 à 15/11/2021. Os  servidores que foram admitidos após 01/12/2020 serão avaliados a partir da data de sua admissão.
                    O formulário eletrônico deverá ser preenchido, escolhendo em cada critério somente uma opção, e que não será concluído se ficar algum critério sem preenchimento.
                    Servidor, este formulário é de acesso pessoal e intransferível e será monitorado pelo IP do computador que está sendo realizado, não devendo ser a avaliação realizada por terceiros.
                    Esclarecimentos sobre a avaliação serão prestados pela Diretoria de Recursos Humanos.
                    </p>
                </div>

        </div>
    )
}

export default Home