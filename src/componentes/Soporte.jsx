import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'


const Soporte = (props) => {
    const { productos, addproducto } = props;
    const soport = productos.filter(arti => arti.id >=9 && arti.id <=12 )

    return ( 
        <Fragment>
         <div className='container'>
            <h1>Soporte</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {soport.map(arti => (
                
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto}/>
                
             ))}
             </div>
        </div>
  

        </Fragment>
     );
}
 
 
export default Soporte;