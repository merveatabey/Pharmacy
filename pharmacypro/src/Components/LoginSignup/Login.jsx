import React, { useState } from 'react'
import './Login.css';
import { FaMailBulk } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const[userLogin, setUserLogin] = useState({
    UserName : '',
    Password: '',
  });

  const handleInputChange = (e, fieldName) => {
    const {value} = e.target;
    setUserLogin((prevData)=>({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
       // Axios ile .NET API'ye POST isteği yapılıyor
       const response = await axios.post('https://localhost:7203/api/Login', userLogin, {
        headers: {
          'Content-Type' : 'application/json',
        },
       });

       console.log(response.data);
       if (response.status === 200) {
        window.location.href = '/Home'; 
      }
    } catch(error){
      console.error('Login error:', error);
    }
  };

    return (
    <div>
      <div className='wrapper'>
        <form  onSubmit={handleFormSubmit} method='post'>
          <h1>Giriş</h1>
          <div className='input-box'>
            <input type='text' placeholder='Kullanıcı Adı' value={userLogin.UserName} onChange={(e) => handleInputChange(e, 'UserName')} required/>
            <i className='icon'><FaMailBulk/></i>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Şifre' value={userLogin.Password} onChange={(e) => handleInputChange(e, 'Password')} required/>
            <i className='icon'><FaLock/></i>
          </div>
          <div className='remember-forgot'>
            <label><input type='checkbox'/>Beni Hatırla!</label>
            <Link to={'/ForgotPassword'}><a href='#'>Şifremi Unuttum</a></Link>
          </div>
          <button type='submit' className='btn'>Giriş</button>
          <div className='register-link'>
          Bir kaydınız yok mu?<Link to={'/Signup'}><a href='#'>Kayıt Ol</a></Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
