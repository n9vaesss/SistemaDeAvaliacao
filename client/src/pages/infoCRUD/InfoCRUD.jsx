import React, { useState, useEffect } from "react";

import Axios from "axios";
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';
import { Formik, Form, Field } from 'formik';

import Nav from "../../components/nav/Nav";

import './InfoCRUD.css'
import { Button } from "../../components/button/Button";

const InfoCRUD = props =>{

    const [cookies, setCookie, removeCookie] = useCookies(["regEdit"]);

    const [name, setname] = useState('')
    const [registry, setregistry] = useState('')
    const [cpf, setcpf] = useState('')
    const [cargo, setcargo] = useState('')
    const [emprego, setemprego] = useState('')
    const [secretaria, setsecretaria] = useState('')
    const [dt_adm, setdt_adm] = useState('')
    const [superior, setsuperior] = useState('')
    const [superior_1, setsuperior_1] = useState('')
    const [superior_2, setsuperior_2] = useState('')
    const [cargo_origem, setcargo_origem] = useState('')
    const [local_trabalho, setlocal_trabalho] = useState('')
    const [dt_ava_ano, setdt_ava_ano] = useState('')

    useEffect(() => {

        Axios.post("http://172.22.10.83:3334/InfoCRUD",{
            regEdit: cookies.regEdit 
         }).then((response) => {
            setregistry(response.data[0].registro_id_pk)
            setcpf(response.data[0].serv_cpf)
            setname(response.data[0].serv_nome)
            setcargo(response.data[0].serv_cargo)
            setemprego(response.data[0].serv_emprego)
            setsecretaria(response.data[0].serv_secretaria)
            setdt_adm(response.data[0].serv_dt_adm)
            setsuperior(response.data[0].serv_superior)
            setsuperior_1(response.data[0].serv_superior_1)
            setsuperior_2(response.data[0].serv_superior_2)
            setcargo_origem(response.data[0].serv_cargo_origem)
            setlocal_trabalho(response.data[0].serv_local_trabalho)
            setdt_ava_ano(response.data[0].serv_dt_ava_ano)
        })

    }, [])

    const handleChangeRegistry = (e) =>{setregistry(e.target.value)}

    const handleChangeCpf = (e) =>{setcpf(e.target.value)}

    const handleChangeName = (e) =>{setname(e.target.value)}

    const handleChangeCargo = (e) =>{setcargo(e.target.value)}

    const handleChangeEmprego = (e) =>{setemprego(e.target.value)}

    const handleChangeSecretaria = (e) =>{setsecretaria(e.target.value)}

    const handleChangeDt_adm = (e) =>{setdt_adm(e.target.value)}

    const handleChangeSuperior = (e) =>{setsuperior(e.target.value)}

    const handleChangeSuperior_1 = (e) =>{setsuperior_1(e.target.value)}

    const handleChangeSuperior_2 = (e) =>{setsuperior_2(e.target.value)}

    const handleChangeCargo_origem = (e) =>{setcargo_origem(e.target.value)}

    const handleChangeLocal_trabalho = (e) =>{setlocal_trabalho(e.target.value)}

    const handleChangeDt_ava_ano = (e) =>{setdt_ava_ano(e.target.value)}

    const handleSubmitInfoCRUD = () =>{
        Axios.put("http://172.22.10.83:3334/managerUpdate",{
            regEdit: cookies.regEdit,
            name: name,
            registry: registry,
            cpf: cpf,
            cargo: cargo,
            emprego: emprego,
            secretaria: secretaria,
            dt_adm: dt_adm,
            superior: superior,
            superior_1: superior_1,
            superior_2: superior_2,
            cargo_origem: cargo_origem,
            local_trabalho: local_trabalho,
            dt_ava_ano: dt_ava_ano,
    
        }).then((response) =>{
            alert(response.data.msg)
        })
    }

    return(
        <>
            <Nav/>
            <div className="div-main-infocrud">
                <h1>Informações do Usuario:</h1>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmitInfoCRUD}
                >
                    <Form className="div-grid-form">
                        <span className="span-name">Nome: </span>
                        <span className="span-registry">Registro: </span>
                        <span className="span-cpf">CPF: </span>
                        <span className="span-cargo">Cargo: </span>
                        <span className="span-emprego">Emprego: </span>
                        <span className="span-secretaria">Secretaria: </span>
                        <span className="span-dt_adm">Data de admissão: </span>
                        <span className="span-superior">Nivel de acesso: </span>
                        <span className="span-superior_1">Superior imediato: </span>
                        <span className="span-superior_2">Comissao: </span>
                        <span className="span-cargo_origem">Cargo de Origem: </span>
                        <span className="span-local_trabalho">Local de trabalho: </span>
                        <span className="span-dt_ava_ano">Ano da avaliação: </span>
                        <span className="span-empty">⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
                        <Field
                            className="fieldName"
                            name={"name"}
                            value={name}
                            onChange={handleChangeName}
                            type={"input"}
                        />
                        <Field
                            className="fieldRegistry"
                            name={"registry"}
                            value={registry}
                            onChange={handleChangeRegistry}
                            readOnly
                        />
                        <Field
                            className="fieldCpf"
                            name={"cpf"}
                            value={cpf}
                            onChange={handleChangeCpf}
                            readOnly
                        />
                        <Field
                            className="fieldCargo"
                            name={"cargo"}
                            value={cargo}
                            onChange={handleChangeCargo}
                        />
                        <Field
                            className="fieldEmprego"
                            name={"emprego"}
                            value={emprego}
                            onChange={handleChangeEmprego}
                        />
                        <Field
                            className="fieldSecretaria"
                            name={"secretaria"}
                            value={secretaria}
                            onChange={handleChangeSecretaria}
                        />
                        <Field
                            className="fieldDt_adm"
                            name={"dt_adm"}
                            value={dt_adm}
                            onChange={handleChangeDt_adm}
                            readOnly
                        />
                        <Field
                            className="fieldSuperior"
                            name={"superior"}
                            value={superior}
                            onChange={handleChangeSuperior}
                        />
                        <Field
                            className="fieldSuperior_1"
                            name={"superior_1"}
                            value={superior_1}
                            onChange={handleChangeSuperior_1}
                        />
                        <Field
                            className="fieldSuperior_2"
                            name={"superior_2"}
                            value={superior_2}
                            onChange={handleChangeSuperior_2}
                        />
                        <Field
                            className="fieldCargo_origem"
                            name={"cargo_origem"}
                            value={cargo_origem}
                            onChange={handleChangeCargo_origem}
                        />
                        <Field
                            className="fieldLocal_trabalho"
                            name={"local_trabalho"}
                            value={local_trabalho}
                            onChange={handleChangeLocal_trabalho}
                        />
                        <Field
                            className="fieldDt_ava_ano"
                            name={"dt_ava_ano"}
                            value={dt_ava_ano}
                            onChange={handleChangeDt_ava_ano}
                        />
                        
                        <Button 
                           
                           className={"button-infoCRUD"}
                           text = {"Salvar Edições"} 
                           type={"submit"}
                        />

                        
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default InfoCRUD;