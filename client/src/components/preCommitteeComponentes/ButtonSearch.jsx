import React from "react";

import {Formik, Form} from 'formik';
import { useHistory } from 'react-router';
import { useCookies } from "react-cookie";

import { Button } from "../button/Button";

const ButtonSearchCommittee = props => {

    const [cookies, setCookie] = useCookies([props.nameReg]);

    let history = useHistory()

    const handleSearchprecommittee = () => {
        setCookie(props.nameReg, props.registro , { path: "/" });
        history.push(props.caminho);
    }

    return (
        <div>

            <Formik
                initialValues = {{}}
            >
            
                <Form>

                    <li>
                        <Button
                            key={props.registro_id_pk}
                            className={"button-search-precommittee"}
                            onClick={handleSearchprecommittee}
                            text={props.registro}
                            textLine = {'-'}
                            text2={props.name}
                            text3={props.secretaria}
                        />
                    </li>

                </Form>

            </Formik>

        </div>
    )
}

export default ButtonSearchCommittee