import React, { useState } from 'react';
import '../styles/login/login.claro.css';
import * as $ from 'jquery';

//Estas son mis librerias 
import Login_form from '../components/login.form';

const Login = (props) => {

    const [state, setstate] = useState({
        teme: localStorage.getItem('teme') || 'dark'
    })
    const ChangeTeme = e => {
        localStorage.setItem('teme', e.target.value)
        setstate({ teme: e.target.value })
    }


    //Enviamos la info de los temas
    if (state.teme === 'dark') {
        $('#wrapper').removeClass('login-wrapper-teme-light');
        $('#lateral_b').removeClass('lateral-b-teme-light');
        $('#wrapper').addClass('login-wrapper-teme-dark');
        $('#lateral_b').addClass('lateral-b-teme-dark');

        //Enviamos el dato
        $('#teme1').prop('checked', true)
    } else {
        $('#wrapper').removeClass('login-wrapper-teme-dark');
        $('#lateral_b').removeClass('lateral-b-teme-dark');
        $('#wrapper').addClass('login-wrapper-teme-light');
        $('#lateral_b').addClass('lateral-b-teme-light');
        $('#teme2').prop('checked', true)

    }


    return (
        //Creamos las función para cambiar el tema

        <div className="login-wrapper" id="wrapper">
            <div className="lateral-a">
            </div>
            <div className="lateral-b" id="lateral_b">
                <div className='row'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={ChangeTeme} name="inlineRadioOptions" id="teme1" value="dark" />
                        <label className="form-check-label" for="teme1">Tema oscuro</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={ChangeTeme} id="teme2" value="light" />
                        <label className="form-check-label" for="teme2">Tema claro</label>
                    </div>
                </div>

                <Login_form />

                <a href="https://usuarios.lcnidiomas.edu.co/perdio-contrase%C3%B1a" target="_blank" rel="noreferrer">¿Olvidaste tu contraseña?</a>

            </div>
        </div>
    );
};



export default Login;