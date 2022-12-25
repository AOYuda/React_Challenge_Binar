import React from "react";
import "./WhyUs.css";
import IconComplete from "../Assets/icon_complete.png";
import IconPrice from "../Assets/icon_price.png";
import Icon24hrs from "../Assets/icon_24hrs.png";
import IconProfessional from "../Assets/icon_professional.png";

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us-id">
      <h3>Why us!</h3>
      <p>Kenapa harus pilih Binar Car Rental?</p>
      <div className="parent-wu">
        <div className="child-wu">
          <img src={IconComplete} alt="complete" />
          <h4>Mobil Lengkap</h4>
          <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
        <div className="child-wu">
          <img src={IconPrice} alt="price" />
          <h4>Harga Murah</h4>
          <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
        </div>
        <div className="child-wu">
          <img src={Icon24hrs} alt="wholeday" />
          <h4>Layanan 24 Jam</h4>
          <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
        </div>
        <div className="child-wu">
          <img src={IconProfessional} alt="professional" />
          <h4>Sopir Profesional</h4>
          <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
