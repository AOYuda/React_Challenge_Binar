import React from "react";
import "./NarasiDetail.css";
import Innova from "../Assets/inova.png";

const NarasiDetail = () => {
  return (
    <section class="result-card-detail">
      <div class="narasi-detail-mobil">
        <h6>
          <strong>Tentang Paket</strong>
        </h6>
        <h6>
          <strong>Include</strong>
        </h6>
        <ul class="list-include-detail">
          <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
          <li>Sudah termasuk bensin selama 12 jam</li>
          <li>Sudah termasuk Tiket Wisata</li>
          <li>Sudah termasuk pajak</li>
        </ul>
        <h6>
          <strong>Exclude</strong>
        </h6>
        <ul class="list-include-detail">
          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
          <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
          <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <div class="list-collapse-refund">
          <h6>
            <strong> Refund, Reschedule, Overtime</strong>
          </h6>
          <ul class="list-include-detail">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
      </div>
      <div class="image-detail-mobil">
        <img src={Innova} class="card-img-top" alt="#" />
        <div class="card-body-detail">
          <h6>
            <strong>Innova</strong>
          </h6>
          <p>6 - 8 orang</p>
          <div class="d-flex justify-content-between pt-5">
            <h6 class="card-text-detail">
              <strong>Total</strong>
            </h6>
            <h6 class="card-text-harga-total">
              <strong>Rp. 500.000</strong>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarasiDetail;
