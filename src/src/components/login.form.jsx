import React from 'react';

const LoginForm = (props) => {


    return (
        <div className="wrapper-form colum">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario"  autoComplete="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" autoComplete="current-password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="form-check" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Matén mi sesión iniciada</label>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>);
};


export default LoginForm;