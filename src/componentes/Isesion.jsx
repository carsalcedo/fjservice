import React, { Fragment, useState } from 'react'
import {
    NavLink,
    useHistory
  } from "react-router-dom";
import { auth } from '../fireconfig';

  
const Isesion = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const history = useHistory();
  const logear = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => history.push('/')).catch(err=>alert(err.message))
  } 


    return (  
        <Fragment>
          <div id="formu" className="container-fluid">
          <form className="">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={email}
                  onChange={e => setEmail(e.target.value)} required/>

              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>

                <input type="password" className="form-control" id="exampleInputPassword1"
                  value={password}
                  onChange={e => setPassword(e.target.value)} required/>

              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>

              <button id="btinicio" type="submit" className="btn btn-success" onClick={logear}>Iniciar sesion</button>
              <NavLink to='/formulario' className="nav-link"> <p className="mx-1" >Registrarse</p> </NavLink>
            </form>
                 
            
            </div>
                    
        </Fragment>
    );
}
 
export default Isesion;