import React from "react";
import "./SearchBarDetail.css";

const SearchBarDetail = () => {
  return (
    <section className="search-bar-detail">
      <div className="nama-mobil-detail">
        <h6>Pencarian</h6>
        <p>Nama Mobil</p>
        <input type="text" id="fname" name="fname" disabled />
      </div>
      <div className="kategori-detail">
        <p>Kategori</p>
        <select className="form-option-detail" disabled>
          <option>Masukan Kapasitas Mobil</option>
          <option value="1">2 - 4 orang</option>
          <option value="2">4 - 6 orang</option>
          <option value="3">6 - 8 orang</option>
        </select>
      </div>
      <div className="harga-detail">
        <p>Harga</p>
        <select className="form-option-detail" aria-label="Default select example" disabled>
          <option selected>Masukan Harga Sewa per Hari</option>
          <option value="1">&lt;Rp. 400.000</option>
          <option value="2">Rp. 400.000 - Rp. 600.000</option>
          <option value="3">&lt;Rp. 600.000</option>
        </select>
      </div>
      <div className="status-detail">
        <p>Status</p>
        <select className="form-option-detail" aria-label="Default select example" disabled>
          <option selected>Disewa</option>
        </select>
      </div>
    </section>
  );
};

export default SearchBarDetail;
