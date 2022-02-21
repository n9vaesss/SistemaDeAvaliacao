import React from "react";

import { Field, Form, Formik } from "formik";
import * as yup from "yup"
import { GrSearch } from "react-icons/gr";

import { Button } from "../button/Button";
import { Error } from "../errorMessage/Error";

import './ReportForm.css'


const ReportForm = (props) => {

    const cb = props.submitForm

    const handleSubmitReport = (values) => cb(values.searchReport)

    const validationReport = yup.object().shape({
        searchReport: yup
            .string()
            .required("Campo obrigatório"),
    })

    return (
        <div className="main-report-form">


            <Formik
                initialValues={{
                    searchReport: '',
                }}
                onSubmit={handleSubmitReport}
                validationSchema={validationReport}
            >
                <Form className="report-form">

                    <h1>Insira o registro que deseja visualizar</h1>

                    <div className="div-align-reg" >
                        <i> <GrSearch /> </i>
                        <Field name="searchReport" placeholder="Registro" className="input-report-form" />
                    </div>

                    <Error
                        name="searchReport"
                    />

                    <Button
                        className="button-form-login"
                        type={"onSubmit"}
                        text={"Pesquisar"}
                    />

                </Form>
            </Formik>
        </div>
    )
}

export default ReportForm