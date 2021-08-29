import React, { Fragment } from 'react'
import Tarjetas from './Tarjetas'



const ProductPage = (props) => {

    const { productos, addproducto, titleProduct } = props;
   
    return ( 
        <Fragment>
         <div className='container'>
            <h1>{titleProduct}</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {productos.map(arti => (
            <Tarjetas key={arti.id} arti={arti} addproducto={addproducto} 
             />))}
             </div>
        </div>
  

        </Fragment>
     );
}
 
export default ProductPage;