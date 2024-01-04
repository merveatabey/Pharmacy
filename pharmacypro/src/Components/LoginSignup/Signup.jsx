import React, { useState } from 'react'
import './Login.css';
import { FaUser,FaMailBulk, FaLock, FaLocationArrow, FaPhone, FaPencilAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [userRegister, setUserRegister] = useState({
    Name: '',
    Surname: '',
    UserName:'',
    tcKimlik: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setUserRegister((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
      //Axios ile .NET API'ye POST isteği yapılıyor
      const response = await axios.post('https://localhost:7203/api/User', userRegister, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Başarılı bir şekilde kayıt olduğunu kontrol etmek için API'den gelen yanıtı yazdırabilirsiniz
      console.log(response.data);
      // İsteği başarıyla tamamladıktan sonra sayfayı başka bir yere yönlendirebilirsiniz
      // Örneğin, kullanıcıyı giriş sayfasına yönlendirebilirsiniz. 
      if (response.status === 200) {
        window.location.href = '/Home'; // Sayfa yenileme işlemi
      } 
      
    } catch(error){
      //hata durumunda burada işlem yapabilirsiniz
      console.error('Signup error:', error);
    } 
  };

  return (
    <div>
      <div className='wrapper'>
      <form onSubmit={handleFormSubmit} method='post' >
          <h1>Kayıt Ol</h1>
          <div className='input-box'>
            <input type='text' placeholder='Ad' value={userRegister.Name} onChange={(e) => handleInputChange(e, 'Name')} required/>
           <i className='icon'><FaUser/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Soyad' value={userRegister.Surname} onChange={(e) => handleInputChange(e, 'Surname')} required/>
           <i className='icon'><FaUser/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Kullanıcı Adı' value={userRegister.UserName} onChange={(e) => handleInputChange(e, 'UserName')} required/>
           <i className='icon'><FaUser/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='T.C. Kimlik Numarası' value={userRegister.tcKimlik} onChange={(e) => handleInputChange(e, 'tcKimlik')} required/>
           <i className='icon'><FaPencilAlt/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Mail'value={userRegister.Email} onChange={(e) => handleInputChange(e, 'Email')} required/>
            <i className='icon'><FaMailBulk/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Telefon'value={userRegister.PhoneNumber} onChange={(e) => handleInputChange(e, 'PhoneNumber')} required/>
            <i className='icon'><FaPhone/></i>
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Adres' value={userRegister.Address} onChange={(e) => handleInputChange(e, 'Address')}required/>
            <i className='icon'><FaLocationArrow/></i>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Şifre' value={userRegister.Password} onChange={(e) => handleInputChange(e, 'Password')}required/>
            <i className='icon'><FaLock/></i>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Şifre Tekrar' value={userRegister.ConfirmPassword} onChange={(e) => handleInputChange(e, 'ConfirmPassword')}required/>
            <i className='icon'><FaLock/></i>
          </div>
          <button type='submit' className='btn'>Kaydet</button>
          <div className='register-link'>
          <Link to={'/Login'}>Zaten bir hesabınız var mı?<a href='#'>Giriş Yap</a></Link>
          </div>
        </form>
      </div>
      </div>
  )
}

export default Signup
