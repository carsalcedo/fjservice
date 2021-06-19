import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'


const Telefonos = (props) => {
    const { productos, addproducto } = props;
    const telef = productos.filter(arti => arti.id >=13 && arti.id <=20 )
   
    return ( 
        <Fragment>
         <div className='container-fluid'>
            <h1>Telefonos</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">

            {  
            telef.map(arti => (
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto} 
             />))  } 

             </div>
        </div> 
  

        </Fragment>
     );
}
 
 
export default Telefonos;