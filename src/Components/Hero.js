import React from "react";
import "./Hero.css";
import ImageMercy from "../Assets/img_car.png";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateToCariMobilPage = () => {
    navigate("/carimobil");
  };

  return (
    <section className="banner">
      <div className="narasi-banner">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <button type="button" className="btn btn-primaryy " onClick={handleNavigateToCariMobilPage}>
          <span className="style-button">Mulai Sewa Mobil</span>
        </button>
      </div>
      <div className="img-banner">
        <img src={ImageMercy} alt="mercy" />
      </div>
    </section>
  );
};

export default Hero;
