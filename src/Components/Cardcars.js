import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cardcars.css";
import Innova from "../Assets/inova.png";
import { useNavigate } from "react-router-dom";

const Cardcars = () => {
  const navigate = useNavigate();

  const handleNavigateToDetailMobilPage = () => {
    navigate("/detailmobil");
  };

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    };
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order", config)
      .then((res) => {
        const temporaryCars = res.data.cars;
        console.log(temporaryCars);
        setCars(temporaryCars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {cars?.map((car) => {
        return (
          <div key={car.id}>
            <img src={car.image} alt="gambar-mobilenya" />
            <h1>{car.name}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Cardcars;
