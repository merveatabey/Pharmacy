import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/LoginSignup/Login';
import Home from './Components/HomePage/Home';
import Signup from './Components/LoginSignup/Signup';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import MedicineList from './Components/MedicineList/MedicineList';
import Account from './Components/NavbarCategories/Account';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Chat from './Components/Chat/Chat';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='/ForgotPassword' element={<ForgotPassword/>} />
          <Route path='/Home' element={<Home/>} /> 
          <Route path='/MedicineList' element={<MedicineList/>} />
          <Route path='/Account' element={<Account/>} />
          <Route path='/ShoppingCart' element={<ShoppingCart/>} />
          <Route path='/Chat' element={<Chat/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
