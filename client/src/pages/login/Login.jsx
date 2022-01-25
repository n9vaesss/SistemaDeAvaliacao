import React from 'react';

import LoginLeft from '../../components/loginComponents/loginLeft/LoginLeft';
import LoginRight from '../../components/loginComponents/loginRight/LoginRight';


import './Login.css'

export default function Login(){
    return(
        <div className = "container-main-login">
            <div className = "container-main-left">
                <LoginLeft/>
            </div>
            <div className = "container-main-right">
                <LoginRight/>
            </div>
        </div>
    )
}