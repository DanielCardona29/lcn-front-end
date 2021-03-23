import React from 'react';

const Login_form = (props) => {


    return (
        <div className="wrapper-form colum">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Matén mi sesión iniciada</label>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>);
};


export default Login_form;