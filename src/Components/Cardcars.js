import React from "react";
import "./Cardcars.css";
import Innova from "../Assets/inova.png";
import { useNavigate } from "react-router-dom";

const Cardcars = () => {
  const navigate = useNavigate();

  const handleNavigateToDetailMobilPage = () => {
    navigate("/detailmobil");
  };

  return (
    <section id="cards-car">
      <div className="container-card-cars">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 card-luar">
              <div className="card-body testcardcar">
                <img src={Innova} className="card-img-top innova-img mt-5" alt="innova" />
                <div className="mt-5 pt-3">
                  <span className="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                  <h5 className="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                  <p className="card-text innova-style-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <button className="btn btn-primary card-car-btn fw-bold" onClick={handleNavigateToDetailMobilPage}>
                Pilih Mobil
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-luar">
              <div className="card-body testcardcar">
                <img src={Innova} className="card-img-top innova-img mt-5" alt="innova" />
                <div className="mt-5 pt-3">
                  <span className="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                  <h5 className="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                  <p className="card-text innova-style-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <button className="btn btn-primary card-car-btn fw-bold" onClick={handleNavigateToDetailMobilPage}>
                Pilih Mobil
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-luar">
              <div className="card-body testcardcar">
                <img src={Innova} className="card-img-top innova-img mt-5" alt="innova" />
                <div className="mt-5 pt-3">
                  <span className="text-black p-2 mt-5 innova-style-text-span">Innova</span>
                  <h5 className="card-title p-2 innova-style-text-h5">Rp 500.000 / hari</h5>
                  <p className="card-text innova-style-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <button className="btn btn-primary card-car-btn fw-bold" onClick={handleNavigateToDetailMobilPage}>
                Pilih Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardcars;
