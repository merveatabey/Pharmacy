import React, { useState } from 'react'
import './Account.css'
import axios from 'axios';

const Account = () => {
  const[userData, setUserData] = useState({
    UserName:'',
    Name:'',
    Surname:'',
    Email:'',
    PhoneNumber:'',
  });

  const handleFormSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('https://localhost:7203/api/Update',userData,{
        headers:{
          'Content-Type' : 'application/json',
        },
      });
      console.log(response.data);
    }
    catch(error){
      console.error('Login error:', error);
    }
  }

  return (
    <div className='birleşim'>
      <div className='account'>
      <h1>Kullanıcı Bilgilerim</h1>
      <form className='forms-sample' onSubmit={handleFormSubmit}>
        <div className='info-box'>
          <label>Ad</label>
          <input type='text' value={userData.Name || ''} onChange={(e) => setUserData({ ...userData, Name: e.target.value })}/>
        </div>
        <div className='info-box'>
          <label>Soyad</label>
          <input type='text' value={''}/>
        </div>
        <div className='info-box'>
          <label>Kullanıcı Adı</label>
          <input type='text' value={''}/>
        </div>
        <div className='info-box'>
          <label>Mail</label>
          <input type='text' value={''}/>
        </div>
        <div className='info-box'>
          <label>Telefon</label>
          <input type='text' value={''}/>
        </div>
        <button className='btn'>Güncelle</button>
      </form>
    </div>
    <div className='update-password'>
      <form className='form-sample2' onSubmit={'#'}>
        <h2>Şifre Güncelleme</h2>
        <div className='info-box'>
          <label>Şu Anki Şifre</label>
          <input type='password' value={''}/>
        </div>
        <div className='info-box'>
          <label>Yeni Şifre</label>
          <input type='password' value={''}/>
          <small className='info-message'>Şifreniz en az 8 karakter uzunluğunda olmalı, işaret ve büyük harf kullanımına dikkat edin.</small>
        </div>
        <div className='info-box'>
          <label>Yeni Şifre (Tekrar)</label>
          <input type='password' value={''}/>
        </div>
        <button className='btn'>Güncelle</button>

      </form>
    </div>
    </div>
    
  )
}

export default Account
