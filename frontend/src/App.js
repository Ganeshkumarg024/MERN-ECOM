
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footers from './Components/Footer/Footers';

import menbanner from "./Components/Assets/banner_mens.png"
import womensb from  "./Components/Assets/banner_women.png"
import kidsbanner from  "./Components/Assets/banner_kids.png"

function App() {
  return (
    <div >
       <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banners={menbanner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banners={womensb} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banners={kidsbanner} category="kid"/>}/>
      <Route path='/products' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/login' element={<LoginSignup/>}/>
       <Route path='/cart' element={<Cart/>}/>
     
     </Routes>
     <Footers/>
   
      </BrowserRouter>
    </div>
  );
}

export default App;