import React from "react";
import "./HeroCariMobil.css";
import ImageMercy from "../Assets/img_car.png";

const HeroCariMobil = () => {
  return (
    <section className="banner">
      <div className="narasi-banner">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
      </div>
      <div className="img-banner">
        <img src={ImageMercy} alt="mercy" />
      </div>
    </section>
  );
};

export default HeroCariMobil;
