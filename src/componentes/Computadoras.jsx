import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'


const Computadoras = (props) => {
    const { productos, addproducto } = props;  
    const compus = productos.filter(arti => arti.id >=25 && arti.id <=28 )

    return ( 
        <Fragment>
         <div className='container'>
            <h1>Computadoras</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {compus.map(arti => (
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto} 
             />))}
             </div>
        </div>
  

        </Fragment>
     );
}
 
 
export default Computadoras;