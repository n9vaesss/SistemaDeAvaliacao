import React from "react";

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";

import { Button } from "../button/Button";
import { Error } from '../../components/errorMessage/Error'


const Questions = (props) =>{

    const cb = props.onClick

    const handleSubmitCommittee = (values) => cb(values.ino, values.dis, values.ass, values.comp, values.flex, values.prep, values.rel, values.plan, values.pont, values.cont)

    const validationCommittee = yup.object().shape({
        ino: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        dis: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        ass: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        comp: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        flex: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        prep: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        rel: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        plan: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        pont: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
        cont: yup
        .number()
        .required("Campo obrigatório, escolha uma das alternativas a baixo"),
    })

    return(
        <div>
            <Formik
                initialValues={{
                    ino: "",
                    dis: "",
                    ass: "",
                    comp: "",
                    flex: "",
                    prep: "",
                    rel: "",
                    plan: "",
                    pont: "",
                    cont: "",
                }}
                onSubmit={ handleSubmitCommittee }
                validationSchema = {validationCommittee}
            >
                <Form className="form-committe">

                <hr size="1"/>

                <p><b>1 - INOVAÇÃO: Considere a capacidade de conceber ideias, técnicas novas e criativas, bem como propor soluções práticas e inovadoras, proporcionando melhorias no trabalho.</b></p>

                <Error name = 'ino'/>

                <div>
                    <label>
                        <Field
                            name = "ino"
                            value = "0"
                            type = "radio"
                            className = "field-form-committe"
                        />
                        <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                    </label>
                </div>

                <div>
                    <label>
                        <Field
                            name = "ino"
                            value = "1"
                            type = "radio"
                            className = "field-form-committe"
                        />
                        <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                    </label>
                </div>

                <div>
                    <label>
                        <Field
                            name = "ino"
                            value = "2"
                            type = "radio"
                            className = "field-form-committe"
                        />
                        <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                    </label>
                </div>

                <div>
                    <label>
                        <Field
                            name = "ino"
                            value = "3"
                            type = "radio"
                            className = "field-form-committe"
                        />
                        <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                    </label>
                </div> 

                <hr size="1"/>

                <p><b>2 - DISCIPLINA: Considere o conhecimento e o acatamento das normas disciplinares e ordens recebidas, bem como o respeito à hierarquia.</b></p>

                <Error name = 'dis'/>
                    
                    <div>
                        <label>
                            <Field
                                name = "dis"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "dis"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "dis"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "dis"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>3 - ASSIDUIDADE: Considere a presença frequente no local de trabalho e nele executando efetivamente suas atribuições.</b></p>
                    
                    <Error name = 'ass'/>

                    <div>
                        <label>
                            <Field
                                name = "ass"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "ass"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "ass"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "ass"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>4 - COMPROMISSO PROFISSIONAL: Considere o envolvimento do servidor com o trabalho e a vontade que tem de colocar seu protencial a serviço do Município.</b></p>

                    <Error name = 'comp'/>
                    
                    <div>
                        <label>
                            <Field
                                name = "comp"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "comp"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "comp"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "comp"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>  

                    <hr size="1"/>

                    <p><b>5 - FLEXIBILIDADE: Considere a capacidade de demonstrar adaptabilidade diante de situações novas e/ou adversas.</b></p>
                    
                    <Error name = 'flex'/>

                    <div>
                        <label>
                            <Field
                                name = "flex"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "flex"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "flex"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "flex"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div> 

                    <hr size="1"/>

                    <p><b>6 - PREPARO PROFISSIONAL: Considere a utilização dos conhecimentos teóricas na execução prática do trabalho, bem como conhecimento de métodos e técnicas atualizadas no seu campo de atuação.</b></p>

                    <Error name = 'prep'/>
                    
                    <div>
                        <label>
                            <Field
                                name = "prep"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "prep"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "prep"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "prep"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>7 - RELAÇÕES INTERPESSOAIS: Considere a capacidade de manter relações humanas saudáveis e construtivas, visando proporcionar ao grupo um ambiente harmonioso, tendo em vista a execução integrada do trabalho.</b></p>
                    
                    <Error name = 'rel'/>

                    <div>
                        <label>
                            <Field
                                name = "rel"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "rel"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "rel"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "rel"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>8 - PLANEJAMENTO: Considere a capacidade de planejar e estabelecer objetivos, otimizando a utilização de recursos humanos e materiais, garantindo uma ação lógica e eficaz na realização das atividades.</b></p>

                    <Error name = 'plan'/>
                    
                    <div>
                        <label>
                            <Field
                                name = "plan"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "plan"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "plan"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "plan"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>9 - PONTUALIDADE: Considere o cumprimento do horário de trabalho.</b></p>
                    
                    <Error name = 'pont'/>

                    <div>
                        <label>
                            <Field
                                name = "pont"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "pont"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "pont"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "pont"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>

                    <p><b>10 - CONTROLE EMOCIONAL: Considere a capacidade de manter o equilíbrio emocional diante de situações adversas e tendo atitudes acertadas.</b></p>

                    <Error name = 'cont'/>
                    
                    <div>
                        <label>
                            <Field
                                name = "cont"
                                value = "0"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>NÃO ATINGIU O ESPERADO.....(Indica que o servidor não atende as expectativas em relação ao critério avaliado, demonstrando muita dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "cont"
                                value = "1"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO PARCIALMENTE.....(Indica que o servidor atende parte das expectativas em relação ao critério avaliado, demonstrando alguma dificuldade na realização de suas atribuições).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "cont"
                                value = "2"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>ATINGIU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, atende as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <div>
                        <label>
                            <Field
                                name = "cont"
                                value = "3"
                                type = "radio"
                                className = "field-form-committe"
                            />
                            <span>SUPEROU O ESPERADO.....(indica que o servidor, na realização de suas atribuições, superou as expectativas em relação ao critério avaliado).</span>
                        </label>
                    </div>

                    <hr size="1"/>
                               
                    <Button type = "submit" className= "button-form-login" text= "Enviar" />

                </Form>

            </Formik>
        </div>
    )

}

export default Questions