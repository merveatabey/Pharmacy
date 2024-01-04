  import React, { useState } from 'react'
  import './Body.css';
  import {FaCamera, FaRobot } from 'react-icons/fa';
  import {Link} from 'react-router-dom';
  const Body = () => {
    const [prescriptionNumber, setPrescriptionNumber] = useState('');

    const redirectToEnabiz = () =>{
      window.location.href = 'https://www.enabiz.gov.tr/'; 
    };
    const handlePrescriptonSubmit = (e) => {
      e.preventDefault();
      // Burada reçete numarası ile yapılacak işlemleri ekleyebilirsiniz.
      console.log('Prescription Number:', prescriptionNumber);
       // Örneğin, reçete numarasını bir API'ye gönderip kontrol edebilirsiniz.

    };
    const PrescriptionCamera = () => {
      //kamera açma işlemlerini buraya yaz
    };
  
    return (
      <div>
        <Link to={'/Chat'} className='chat-button'>
          <FaRobot size={40}/>
          <div className='tooltip'>ASİSTAN ROBOTLA KONUŞ</div>
        </Link>
        <div className='header'>
          <span>ONLINE</span>
          <span>ECZANE</span>
        </div>
        <div className='corner-button' onClick={redirectToEnabiz}> 
          E-NABIZ
         <div className='tooltip'>Reçete numaranı unuttuysan e-nabızdan kontrol edebilirsin!</div>
        </div>
        <div className='prescription-form'>
          <form onSubmit={handlePrescriptonSubmit}>
              <input type='text' placeholder='Reçete Numarası' required value={prescriptionNumber} onChange={(e) => setPrescriptionNumber(e.target.value)}/>
            <Link to={'/MedicineList'}><button type='submit' className='btn'>Devam Et</button></Link>
          </form>
        </div>
        <div className='prescription-camera'>
          <div className='icon-frame'>
            <FaCamera size={40}/>
          </div>
          <p>Reçetenin Fotoğrafını Çek</p>
        </div>
      </div>
    )
  }
  export default Body
