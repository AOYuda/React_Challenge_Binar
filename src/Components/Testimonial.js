import React from "react";
import "./Testimonial.css";
import PhotoTesti1 from "../Assets/img_photo_testi1.png";
import PhotoTesti2 from "../Assets/img_photo_testi2.png";
import Rate from "../Assets/rate.png";
import Leftbutton from "../Assets/Leftbutton.png";
import Rightbutton from "../Assets/Rightbutton.png";

const Testimonial = () => {
  return (
    <section id="testi" className="testimonial">
      <h3>Testimonial</h3>
      <p class="narasi-testi">Berbagai review positif dari para pelanggan kami</p>

      <div class=".container-md card-parent">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-container-testi">
                <div class="row g-0 card-container-row">
                  <div class="col-md-3 card-container-column-image">
                    <img src={PhotoTesti1} class="rounded mx-auto my-auto d-block" alt="..." />
                  </div>
                  <div class="col-md-9 card-container-colummn-rate">
                    <div class="card-body card-container-rate">
                      <img src={Rate} alt="..." />
                      <p class="card-text card-naration">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="card-text-name">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-container-testi">
                <div class="row g-0 card-container-row">
                  <div class="col-md-3 card-container-column-image">
                    <img src={PhotoTesti2} class="rounded mx-auto my-auto d-block" alt="..." />
                  </div>
                  <div class="col-md-9 card-container-colummn-rate">
                    <div class="card-body card-container-rate">
                      <img src={Rate} alt="..." />
                      <p class="card-text card-naration">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="card-text-name">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-container-testi">
                <div class="row g-0 card-container-row">
                  <div class="col-md-3 card-container-column-image">
                    <img src={PhotoTesti1} class="rounded mx-auto my-auto d-block" alt="..." />
                  </div>
                  <div class="col-md-9 card-container-colummn-rate">
                    <div class="card-body card-container-rate">
                      <img src={Rate} alt="..." />
                      <p class="card-text card-naration">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="card-text-name">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-evenly align-items-center">
          <div class="btn di-pencet">
            <button type="button" class="pencetKiri" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <img src={Leftbutton} alt="left" />
            </button>
            <button type="button" class="pencetKanan" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <img src={Rightbutton} alt="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
