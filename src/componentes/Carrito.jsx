import React, {Fragment} from 'react'

const Carrito = (props) => {
  const { artis, addproducto, onRemove, pagar } = props;
  const itemsPrice = artis.reduce((a, c) => a + c.qty * c.precio, 0);
  const totalItems = artis.reduce((a, c) => a + c.qty, 0);

  

    return ( 
        <Fragment>
            <div class="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Item</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody id="items">
             
                  {
          
                  artis.map(item =>(
                <tr key={item.id}>
                    <th scope="row"><img src={item.urlimage} className="img-fluid" alt="..." width="50" height="50"/></th>
                    <td>{item.name}</td>
                    <td>${item.precio}</td>
                    <td className="text-center"> {item.qty}</td>
                    <td>${item.qty*item.precio}</td>
                    <td>
                        <button onClick={() => addproducto(item)} className="btn btn-info btn-sm">
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className="btn btn-danger btn-sm">
                            -
                        </button>
                    </td>
                    
                </tr>))}
                
                <tr id="footercarrito">
                {artis.length === 0 &&  <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>}
                {artis.length !== 0 && (
                  <>
                  <th scope="row" colspan="2">Total items: {totalItems} </th>
                  <th scope="row" colspan="3">Total Pagar: ${itemsPrice} </th>
                  <th><button className="btn btn-primary btn-sm" onClick={() => pagar()}>
                        PAGAR
                    </button> </th>
                    </>)}
                  </tr>
                 
              </tbody>
            
            </table>
            </div>

        </Fragment>
     );
}
 
export default Carrito;