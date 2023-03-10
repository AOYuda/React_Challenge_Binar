import React from "react";
import "./SearchBarResult.css";

const SearchBarResult = () => {
  return (
    <section className="search-bar-result">
      <div className="nama-mobil-result">
        <h6>Pencarian</h6>
        <p>Nama Mobil</p>
        <input type="text" id="fname" name="fname" />
      </div>
      <div className="kategori-result">
        <p>Kategori</p>
        <select className="form-option-result">
          <option>Masukan Kapasitas Mobil</option>
          <option value="1">2 - 4 orang</option>
          <option value="2">4 - 6 orang</option>
          <option value="3">6 - 8 orang</option>
        </select>
      </div>
      <div className="harga-result">
        <p>Harga</p>
        <select className="form-option-harga-result" aria-label="Default select example">
          <option selected>Masukan Harga Sewa per Hari</option>
          <option value="1">&lt;Rp. 400.000</option>
          <option value="2">Rp. 400.000 - Rp. 600.000</option>
          <option value="3">&lt;Rp. 600.000</option>
        </select>
      </div>
      <div className="status-result">
        <p>Status</p>
        <select className="form-option-result" aria-label="Default select example">
          <option selected>Disewa</option>
        </select>
      </div>
      <div className="cari-mobil-result">
        <button className="button-result">Edit</button>
      </div>
    </section>
  );
};

export default SearchBarResult;
