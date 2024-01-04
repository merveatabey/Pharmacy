import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Searchbar from './Searchbar';
import {Link} from 'react-router-dom';
import {FaHeart, FaShoppingCart, FaUser,FaInbox,FaClinicMedical,FaBookMedical,FaLocationArrow} from 'react-icons/fa';
const Navbar = () => {
  const [results, setResults] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const closeSubMenu = () =>{
    setIsSubMenuOpen(false)
  };

  fetch('http://localhost:3000/categories.json', {
    method: 'GET',
    mode: 'cors', // CORS modunu açın
    headers: {
        'Content-Type': 'categories/json',
        // Diğer başlıklar...
    },
})
  useEffect(() => {
    //JSON dosyasından kategorileri çek
    fetch('http://lacalhost:3000/categories.json')
    .then(response => response.json())
    .then(data => setCategories(data))
    .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (  
    <div className='navbar'>
      <div className='nav-links'>
      <Link to='/Account' className='icon-with-text'>
          <FaUser size={24} />
          <span>Anasayfa</span>
        </Link>
        <Link to='/Account' className='icon-with-text'>
          <FaUser size={24} />
          <span>Hesabım</span>
        </Link>
        <Link to='/Favorites' className='icon-with-text'>
          <FaHeart size={24} />
          <span>Favorilerim</span>
        </Link>
        <Link to='/ShoppingCart' className='icon-with-text'>
          <FaShoppingCart size={24} />
          <span>Sepetim</span>
        </Link>
        <Link to={'/Account'} className='icon-with-text'>
          <FaInbox size={24}/>
          <span>Siparişler</span>
        </Link>
        <Link to={'/Account'} className='icon-with-text'>
          <FaClinicMedical size={24}/>
          <span>Reçetelerim</span>
       </Link>
        <Link to={'/Account'} className='icon-with-text'>
          <FaLocationArrow size={24}/>
          <span>Adres</span>
        </Link>
        <Link to={'#'} className='icon-with-text'onClick={toggleSubMenu}>
          <FaBookMedical size={24}/>
          <span>Kategoriler</span>
          {isSubMenuOpen && (
             <div className='submenu' onClick={closeSubMenu}>
             <div className='categories-wrapper'>
               {categories.map((category, index) => (
                 <div key={index} className='category-item'>
                   <Link to={category.link}>{category.name}</Link>
                   {category.subcategories && category.subcategories.length > 0 && (
                     <div className='subsubmenu'>
                       {category.subcategories.map((subcategory, subIndex) => (
                         <Link key={subIndex} to={`${category.link}/${subcategory}`}>
                           {subcategory}
                         </Link>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>
          )}
        </Link>
      </div>
      <div className='search-bar'>
        <Searchbar setResults={setResults}/>
        <div>SearchResults</div>
      </div>
      
    </div>
      
  );
};
export default Navbar
