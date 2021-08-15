import React, {Fragment} from "react";
import Tarjetas from './Tarjetas'

const Sproduct = (props) => {
  const { productos, addproducto } = props;  

  const renderProductList = productos.map((arti) => {
    return (
      <Tarjetas
        arti={arti}
        key={arti.id}
        addproducto={addproducto} 
      />
    );
  });
   
    return ( 
        <Fragment>
         <div className='container'>
            <h1>Resultados</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {renderProductList.length > 0
            ?
            renderProductList
            :
            <p>sin resultados</p>
            }
             </div>
        </div>
        </Fragment>
     );
}
 
export default Sproduct;

