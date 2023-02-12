import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './components/signup/signup';
import Loginform from './components/login/login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/cart';
import ProfileUi from './ProfileUI/ProfileUi';
import Adminpanel from './adminpanel/Adminpanel';
import AddItem from './adminpanel/addProductItem/AddProductItem';
import Adminprofile from './adminpanel/adminprofile/adminprofile';
import { useSelector } from 'react-redux';

function App() {

  const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
      <Routes>
      <Route path='signup' element={<Signup/>} />
      <Route path='/' element={<Loginform/>}/>
      <Route path='profile' element={!checkLoggedIn && <ProfileUi/>}  />
      <Route path='cart' element={!checkLoggedIn && <Cart/>} />
      <Route path='home' element={!checkLoggedIn && <Home/>}/>
      <Route path='adminpanel' element={<Adminpanel/>} />
      <Route path='adminprofile' element={<Adminprofile/>} />
      <Route path='additem' element={<AddItem/>}/>
      </Routes>
  );
}

export default App;
