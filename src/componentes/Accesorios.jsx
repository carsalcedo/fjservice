import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'



const Accesorios = (props) => {

    const { productos, addproducto } = props;
    const accesorio = productos.filter(arti => arti.id >=21 && arti.id <=24 )
   
    return ( 
        <Fragment>
         <div className='container'>
            <h1>Accesorios</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {accesorio.map(arti => (
            <Tarjetas key={arti.id===4} arti={arti} addproducto={addproducto} 
             />))}
             </div>
        </div>
  

        </Fragment>
     );
}
 
export default Accesorios;