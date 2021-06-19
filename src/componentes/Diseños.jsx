import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'



const Diseños = (props) => {

    const { productos, addproducto } = props;
    const diseño = productos.filter(arti => arti.id >=1 && arti.id <=8 )
   
    return ( 
        <Fragment>
         <div className='container'>
            <h1>Diseños</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {diseño.map(arti => (
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto} 
             />))}
             </div>
        </div>
  

        </Fragment>
     );
}
 
export default Diseños;