import React from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleNavigateToHasilPencarianPage = () => {
    navigate("/hasilpencarian");
  };
  return (
    <section className="search-bar">
      <div className="nama-mobil">
        <p>Nama Mobil</p>
        <input type="text" id="fname" name="fname" />
      </div>
      <div className="kategori">
        <p>Kategori</p>
        <select className="form-option">
          <option>Masukan Kapasitas Mobil</option>
          <option value="1">2 - 4 orang</option>
          <option value="2">4 - 6 orang</option>
          <option value="3">6 - 8 orang</option>
        </select>
      </div>
      <div className="harga">
        <p>harga</p>
        <select className="form-option-harga" aria-label="Default select example">
          <option selected>Masukan Harga Sewa per Hari</option>
          <option value="1">&lt;Rp. 400.000</option>
          <option value="2">Rp. 400.000 - Rp. 600.000</option>
          <option value="3">&lt;Rp. 600.000</option>
        </select>
      </div>
      <div className="status">
        <p>Status</p>
        <select className="form-option" aria-label="Default select example">
          <option selected>Disewa</option>
        </select>
      </div>
      <div className="cari-mobil">
        <button onClick={handleNavigateToHasilPencarianPage}>Cari Mobil</button>
      </div>
    </section>
  );
};

export default SearchBar;
