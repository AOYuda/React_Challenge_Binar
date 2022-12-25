import React from "react";
import "./OurService.css";
import GirlPicture from "../Assets/img_service.png";

const OurService = () => {
  return (
    <section className="our-service" id="ourservice">
      <div className="img-our-service">
        <img src={GirlPicture} alt="girlpicture" />
      </div>
      <div className="narasi-our-service">
        <h3>Best car rental for any kind of trip in (Lokasimu)!</h3>
        <p>Sewa mobil dilokasimu bersama Binar Car Rental dijamin harga lebih murah dibandingkan yang lain, koondisi mobil baru, seta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, weeding, meeting, dll.</p>
        <div className="list-our-service">
          <ul className="list-os">
            <li>Sewa Mobil Dengan Supir di Bali 12 jam</li>
            <li>Sewa Mobil Lepas Kunci di Bali 24 jam</li>
            <li>Sewa Mobil Jangka Panjang Bulanan</li>
            <li>Gratis Antar - Jemput Mobil di Bandara</li>
            <li>Layanan Airport Transfer / Drop In Out</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurService;
