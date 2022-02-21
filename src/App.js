import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Cabecera from './componentes/Cabecera';
import Inicio from './componentes/Inicio';
import Contactos from './componentes/Contactos';
import ProductPage from './componentes/ProductPage';
import Sproduct from './componentes/Sproduct';
import Pie from './componentes/Pie';
import Formulario from './componentes/Formulario';
import Inventario from './Inventario';
import Carrito from './componentes/Carrito'; 
import Isesion from './componentes/Isesion';
import { auth } from './fireconfig';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';



function App() {
 

   //Estado
   const {productos} = Inventario;
   const [artis, setArtis] = useState([]);
   const [{user}, dispatch] = useStateValue();
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   const diseño = productos.filter(arti => arti.id >=1 && arti.id <=8 );
   const soport = productos.filter(arti => arti.id >=9 && arti.id <=12 );
   const telef = productos.filter(arti => arti.id >=13 && arti.id <=20 );
   const accesorio = productos.filter(arti => arti.id >=21 && arti.id <=24 );
   const compus = productos.filter(arti => arti.id >=25 && arti.id <=28 );

   useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])


const addproducto = (arti) => {
  const exist = artis.find(x => x.id === arti.id);
  if (exist) {
    setArtis(
      artis.map(x =>
        x.id === arti.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setArtis([...artis, { ...arti, qty: 1 }]);
  }
};

const onRemove = (arti) => {
  const exist = artis.find((x) => x.id === arti.id);
  if (exist.qty === 1) {
    setArtis(artis.filter((x) => x.id !== arti.id));
  } else {
    setArtis(
      artis.map(x =>
        x.id === arti.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

const desloguear = () =>{   
  if(user){
    auth.signOut();
    setArtis([]);
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    
  }
};

const pagar = () =>{
  alert('Gracias por su compra')
  setArtis([]);
}

const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if (searchTerm !== "") {
    const newProductList = productos.filter((producto) => {
      return Object.values(producto)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setSearchResults(newProductList);
  } else {
    setSearchResults(productos);
  }
};

  return (
    <Fragment>
      <Router>
      <div className='container-fluid' id="tope">

        <Cabecera artis={artis} addproducto={addproducto} onRemove={onRemove} desloguear={desloguear} term={searchTerm}
                searchKeyword={searchHandler} pagar={pagar}/>

        <div className="row mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <NavLink to='/' className="navbar-brand nav-link" activeClassName="active">Inicio</NavLink>
                  <button id="desp" className="Navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><NavLink to='/computadoras' className="dropdown-item" activeClassName="active">Computadoras</NavLink></li>
                              <li><NavLink to='/telefonos' className="dropdown-item" activeClassName="active">Telefonos</NavLink></li>
                              <li><NavLink to='/accesorios' className="dropdown-item" activeClassName="active">Accesorios</NavLink></li>
                            </ul>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Servicios
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li><NavLink to='/soporte' className="dropdown-item" activeClassName="active">Soporte Tecnico</NavLink></li>
                              <li><NavLink to='/diseños' className="dropdown-item" activeClassName="active">Diseño Grafico</NavLink></li>
                            </ul>
                          </li>
                  
                      <NavLink to='/contactos' className="nav-link" activeClassName="active">Contactos</NavLink>
                    </div>
                  </div>
                </div>
              </nav>
        </div>

        <Switch>

       
        <Route path='/search' exact>
       <Sproduct productos={searchTerm.length < 1 ? [] : searchResults} addproducto={addproducto}/>
       </Route>
        <Route path='/carrito'>
        <Carrito artis={artis} addproducto={addproducto} onRemove={onRemove} pagar={pagar}/>
       </Route>
       <Route path='/Isesion'>
       <Isesion/>
       </Route>
        <Route path='/formulario'>
       <Formulario/>
       </Route>
       <Route path='/accesorios'>
       <ProductPage productos={accesorio} titleProduct='Accesorios' addproducto={addproducto}/>
       </Route>
       <Route path='/computadoras'>
       <ProductPage productos={compus} titleProduct='Computadoras' addproducto={addproducto}/>
       </Route>
       <Route path='/diseños'>
       <ProductPage productos={diseño} titleProduct='Diseño Gráfico' addproducto={addproducto}/>
       </Route>
       <Route path='/soporte'>
       <ProductPage productos={soport} titleProduct='Soporte Técnico' addproducto={addproducto}/>
       </Route>
       <Route path='/telefonos'>
       <ProductPage productos={telef} titleProduct='Celulares' addproducto={addproducto}/>
       </Route>
       <Route path='/contactos'>
       <Contactos/>
       </Route>
       <Route path='/'>
       <Inicio productos={productos} addproducto={addproducto} />
       </Route>
     </Switch>
        
        <Pie/>
       
        <div id="botonUp" className="position-fixed bottom-0 end-0 p-3">
        <a href="#tope" className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </a>
        </div>

      </div> 
      </Router>
     </Fragment>
     
      
    
  );
}

export default App;
