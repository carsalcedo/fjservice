import React, {Fragment, useRef} from 'react'
import logofj from '../img/logofj.png'
import {NavLink} from "react-router-dom";
import {useStateValue} from '../StateProvider'
import Carrito from './Carrito';
import {useHistory} from 'react-router-dom';


const Cabecera = (props) => {
  const inputEl = useRef("");
  const {artis, addproducto, onRemove, desloguear, term, searchKeyword} = props;
  const totalItems = artis.reduce((a, c) => a + c.qty, 0);
  const [{user}, dispatch] = useStateValue();
  const history = useHistory(); 

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    history.push("/search"); 
}

     return ( 
        <Fragment>   
            <header className='row'>

            <nav className="col-12 col-lg-2 navbar navbar-light">
                <div className="container" id="logof">
                <img  src={logofj}  alt="" width="150" height="130"/>
                </div>  
            </nav>
            
            <nav className="col-12 col-lg-8 navbar navbar-light">
                <div className="container-fluid">
                  <form onSubmit={handleSubmit} className="d-flex justify-content-center w-100">
                    <input ref={inputEl} 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="buscar" 
                    aria-label="buscar" 
                    value={term}
                    onChange={getSearchTerm}
                    />
                    <button className="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg></button>
                  </form>
                </div>
              </nav>

              <nav className="col-12 col-lg-2 navbar navbar-light">
                <div className="btn-group h-70" role="group" aria-label="Basic outlined example" id="botones">

                  <div id="perfil" className=" me-2">
                  
                      <NavLink to='/Isesion'>
                        <button className="btn btn-outline-success" type="button" onClick={desloguear}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg>
                        </button>
                        </NavLink>
                      
                 </div>

                    <div id="carrito">
               
                          <button className="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#cesta" aria-expanded="false" aria-controls="collapseExample">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className="badge bg-danger ms-1">{totalItems}</span>
                          </button>
                      
                    </div>
                  </div>

                  <div className="collapse" id="cesta">
                  <NavLink to='/carrito'><span className="d-flex justify-content-end">Ver en pantalla completa</span></NavLink>
                    <Carrito artis={artis} addproducto={addproducto} onRemove={onRemove}/>
               
                </div>
              </nav>

              <nav className="col-12 col-lg-12 navbar navbar-light d-flex justify-content-end">
              <h5 className="fw-bold text-white">Bienvenido {user ? user.email : null}  </h5>
            </nav>

            </header>
        </Fragment>
     );
}
 
export default Cabecera;