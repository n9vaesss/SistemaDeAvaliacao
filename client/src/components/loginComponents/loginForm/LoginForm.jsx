import React from "react";

import Avatar from '../../../images/avatar.png'

import { Formik, Form, Field } from 'formik';
import { GrLock } from "react-icons/gr";
import { GrLogin } from "react-icons/gr";
import * as yup from "yup"

import { Button } from "../../button/Button";
import { Error } from "../../errorMessage/Error";

import './LoginForm.css'

const LoginForm = (props)  => {

    const cb = props.submitForm

    const handleSubmitLogin = (values) => cb(values.registry, values.password)

    const validationLogin = yup.object().shape({
        registry: yup
        .string()
        .min(4, "Deve haver no mínimo 4 dígitos")
        .required("Campo obrigatório"),
        password: yup
        .string()
        .min(11, "Deve haver no mínimo 11 caracteres")
        .required("Campo obrigatório"),
    })


    return (
        <div className="main-form-login">
            <Formik
                initialValues={{}}
                onSubmit={handleSubmitLogin}
                validationSchema = {validationLogin}
            >
                <Form className="form-login">
                    <img src={Avatar} alt="Avatar" className="image-avatar" />

                    <h2 className="title-login" >Avaliação/ Análise de Desempenho</h2>

                    <div className="div-align-regpass" >
                        <i> <GrLogin /> </i>
                        <Field name="registry" placeholder="Registro" className="field-regpass" />
                    </div>

                    <Error
                        name = "registry"
                    />
        
                    <div className="div-align-regpass" >
                        <i> <GrLock /> </i>
                        <Field name="password" placeholder="Senha" className="field-regpass" />
                    </div>

                    <Error
                        name = "password"
                    />

                    <Button
                        className = "button-form-login"
                        type={"onSubmit"}
                        text={"Entrar"}
                    />

                </Form>
            </Formik>
        </div >
    )
}

export default LoginForm;