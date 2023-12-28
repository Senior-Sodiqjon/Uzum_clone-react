import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__section-box">
        <div className="footer-section">
        
       <div className="footer-section">
          <h4>Biz haqimizda</h4>
          <p>Topshirish punktlari</p>
          <p>Vakansyalar</p>
        </div>
        </div>


      
        <div className="footer-section">
          <h4>Foydalanuvchilarga</h4>
          <p>Biz bilan bog'lanish</p>
          <p>Savol javob</p>
        </div>

        <div className="footer-section">
          <h4>Tadbirkorlarga</h4>
          <p>Uzumda soting</p>
          <p>Sotuvchi kabinetiga kirish</p>
        </div>


        
        <div className="footer-section">
          <h4>ilovani yuklab olish</h4>
          <p>Uzumda soting</p>
          <p>Sotuvchi kabinetiga kirish</p>
        </div>

        {/* <p>&copy; 2023 Your Company. All Rights Reserved.</p> */}
      </div>
      <div className="footer-bottom">
      </div>
    </footer>
  );
};

export default Footer;
