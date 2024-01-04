import React, { useState } from 'react'
import { FaMailBulk } from 'react-icons/fa'
import './ForgotPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      // Sunucuya şifre sıfırlama talebini gönder
      //const response = await axios.post('http://localhost:3000/ForgotPassword/reset-password', { email });

      //setMessage(response.data.message);
    } catch (error) {
      //setMessage('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };
  return (
    <div className='frame'>
        <form onSubmit={handleFormSubmit}>
          <span><h1>Yeni Şifre Al</h1></span>
            <div className='mail-box'>
                <input type='text' placeholder='Mail' value={email} onChange={handleEmailChange} required></input>
                <i className='icon'><FaMailBulk/></i>
            </div>
            <div className='send-button'>
                <button type='submit'>Şifre Gönder!</button>
            </div>
            <div>{message}</div>
        </form>
    </div>
  )
}

export default ForgotPassword
