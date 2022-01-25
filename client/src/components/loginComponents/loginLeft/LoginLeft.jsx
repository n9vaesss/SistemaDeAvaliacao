import React from "react";

import Bg from '../../../images/bg.png';
import Logo from '../../../images/Logo1.png';

import './Loginleft.css';

const LoginLeft = (props) =>{
    return(
        <div className="container-left-login">
            <img src = { Bg } alt="Brasão de Guararema" className="image-bg" />
            <img src = { Logo } alt="Logo de Guararema" className="image-logo"/>
        </div>
    )
}

export default LoginLeft