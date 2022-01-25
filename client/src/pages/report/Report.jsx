import React, {useEffect} from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

import ReportForm from "../../components/reportComponents/ReportForm"
import Nav from '../../components/nav/Nav'


import './Report.css'


const Report = () =>{

    let history = useHistory()

    const [cookies, setCookie, removeCookie] = useCookies(["searchReportsuperior, searchReport"]);

    useEffect(() =>{
        if(cookies.permission != 3){
            alert('Nivel de acesso negado!')
            history.push('/home')
        }
    },[])

    const handleClickReport = (searchReport) =>{

        setCookie("searchReport", searchReport, { path: "/" });

        Axios.post("http://localhost:3001/searchReportsuperior",{
            searchReport: searchReport,
        }).then((response) =>{

            try{
                setCookie("searchReportsuperior", response.data[0].serv_superior_1, { path: "/" });

                if( response.data[0].serv_superior_1 == null ){
                    alert("Numero de registro invalido");
                }else{
                    history.push('/print')
                }
            }catch(e){
                alert("Numero de registro invalido");
            }
            
        })

    }

    return(
        <div>
            <Nav/>

                <div className="report-main">
                    <ReportForm submitForm = {handleClickReport} />
                </div>
        </div>
    )
}

export default Report