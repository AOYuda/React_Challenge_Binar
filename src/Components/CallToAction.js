import React from "react";
import "./CallToAction.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleNavigateToCariMobilPage = () => {
    navigate("/carimobil");
  };

  return (
    <section className="layanan-sewa">
      <h1>Sewa Mobil Terbaik di (Lokasimu) Sekarang</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type="button" class="btn btn-success fw-bold" onClick={handleNavigateToCariMobilPage}>
        Mulai Sewa Mobil
      </button>
    </section>
  );
};

export default CallToAction;
