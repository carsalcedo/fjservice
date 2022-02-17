import React, {Fragment, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import { auth } from '../fireconfig';

const Formulario = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const history = useHistory();

  const registrar = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        console.log(auth);
        if (auth){
            history.push('/');
        }
    }).catch(err=>alert(err.message))
  } 



    return (
        <Fragment>
            <div id="formu" className="container-fluid">
              <form className="">

              <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Nombre y Apellido</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="text"/>

              </div>


              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>

          

              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>

                <input type="password" className="form-control" id="exampleInputPassword1"
                  value={password}
                  onChange={e => setPassword(e.target.value)}/>

              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>

              <button id="btinicio" type="submit" className="btn btn-success  d-block mx-auto" onClick={registrar}>Registrar</button>
            </form>
      
        </div>

        </Fragment>
      );
}
 
export default Formulario;
