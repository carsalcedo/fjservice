import React, { Fragment } from 'react'
import wall1 from '../img/wall1.png'
import wall2 from '../img/wall2.png'
import wall3 from '../img/wall3.png'
import wall4 from '../img/wall4.png'
import wall5 from '../img/wall5.png'
import Tarjetas from './Tarjetas'

const Inicio = (props) => {
  const { productos, addproducto } = props;  
    const flayers = productos.filter(arti => arti.id >=29 && arti.id <=35 )
    return ( 
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={wall1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={wall2} className="d-block w-100" alt="..."/>
			       </div>
			     <div className="carousel-item">
                <img src={wall3} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={wall4} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={wall5} className="d-block w-100" alt="..."/>
              </div>
             
          </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </a>
          </div>

          <div className='container-fluid'>
            <h1 className="">Combo de Servicios Especiales</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {flayers.map(arti => (
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto} 
             />))}
             </div>
        </div>
        </Fragment>
     );
}
 
export default Inicio;