import React, { Fragment } from 'react'
import accounting from 'accounting'
import {useStateValue} from '../StateProvider'

const Tarjetas = (props) => {
  
  const { arti, addproducto } = props;
  const [{user}, dispatch] = useStateValue();


    return ( 
        <Fragment>
              
               
           
               <div className="card">
                   
                      <img src={arti.urlimage} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">#{arti.id} {arti.name}</h5>
                        <p className="card-text">{accounting.formatMoney(arti.precio)}</p>
                      </div>
                      <div className="card-footer">
                          {user? 
                          <button onClick={() => addproducto(arti)} className="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                            Añadir al Carrito</button>
                            :
                            <button className="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Añadir al Carrito</button>
                            }

                      </div>
                      </div>

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">¿Quieres Ordenar?</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              Hola registrate e inicia sesion para poder adquirir nuestros productos. Es muy facil!
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Articulo añadido al carrito</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                                    
        </Fragment>
     );
}
 
export default Tarjetas;