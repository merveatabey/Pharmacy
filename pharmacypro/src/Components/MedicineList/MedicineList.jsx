import React, { useState } from 'react'
import './MedicineList.css'
import { Link } from 'react-router-dom'
import Navbar from '../Bars/Navbar'


const MedicineList = () => {

  // Örnek ilaç listesi
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Parol', quantity: 1 },
    { id: 2, name: 'Aspirin', quantity: 2 },
    { id: 3, name: 'C-Vitamin', quantity: 3 },
    // Diğer ilaçlar...
  ]);
  // İptal etme fonksiyonu
  const cancelMedicine = (id) => {
    setMedicines((prevMedicines) =>
      prevMedicines.filter((med) => med.id !== id)
    );
  };
  //örnek eczane listesi
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: 'Berat Eczanesi', score: 4.7, address: 'Atatürk cad. /Beşiktaş' },
    { id: 2, name: 'Meriç Ecanesi', score: 4.8, address: 'Mert sk. /Beşiktaş' },
    { id: 3, name: 'Yıldız Eczanesi', score: 4.3, address: 'Alibey Cad. Yıldız sk. / Beşiktaş' }
  ]);
  //seçme fonksiyonu
  const choosePharmacy = (id) => {
    setPharmacies((prevPharmacies) =>
      prevPharmacies.map((pharmacy) => {
        if (pharmacy.id === id) {
          return { ...pharmacy, selected: !pharmacy.selected };
        }
        return pharmacy;
      })
    );
  };
  return (
    <>
      <div className='medicine-navbar'><Navbar /></div>

      <div className="medicine-list">
        <h2>İlaç Listesi</h2>
        <table>
          <thead>
            <tr>
              <th>İlaç İsmi</th>
              <th>Adet</th>
              <th>İptal Et</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.quantity}</td>
                <td>
                  <span className="cancel-icon" onClick={() => cancelMedicine(medicine.id)}>
                    ✖
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='pharmacy-list'>
        <h2>Yakındaki Eczaneler</h2>
        <table>
          <thead>
            <tr>
              <th>Eczane Adı</th>
              <th>Puan</th>
              <th>Adres</th>
              <th>Seç</th>
            </tr>
          </thead>

          <tbody>
            {pharmacies.map((pharmacy) => (
              <tr key={pharmacy.id}>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.score}</td>
                <td>{pharmacy.address}</td>
                <td>
                  <input
                    type='checkbox'
                    checked={pharmacy.selected || false}
                    onChange={() => choosePharmacy(pharmacies.id)} />

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={'/Checkout'}><button type='submit' className='button'>Satın Al</button></Link>
    </>
  )
}

export default MedicineList
