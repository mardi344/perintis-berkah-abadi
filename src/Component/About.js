import React, { useState } from "react";
import "./Styles/Style-about.css";

const About = () => {
  const [showCharLimit, setShowCharLimit] = useState(100);

  const handleClick = () => {
    setShowCharLimit(showCharLimit === 1500 ? 100 : 1500);
  };

  const text = `
    PT. Perintis berkah abadi adalah perusahaan jasa transportasi dan traveling untuk pariwisata. Kami melayani Sewa Mobil dan Paket Wisata lainnya Kantor pusat kami berada di jl tamalanrea raya blok 9m22, kota makassar.
    
    • Kami berinisiatif mengembangkan dan memajukan pariwisata dan traveling yg anda inginkan, wisata yang kami berikan tidak hanya kebutuhan liburan anda, namun juga akan memberikan sebuah pengalaman menyenangkan dan memperkenalkan budaya, adat yang ada di sulawesi selatan serta kami memperkenalkan makanan khas yang ada di kota makassar, tak terlupakan kami memberikan kenyamanan, keamanan dan pelayanan terbaik untuk anda menjadi hal yang utama bagi kami 
    Visi kami adalah menjadi perusahaan yang terpercaya, amanah, aman sesuai kebutuhan perjalanan traveling anda 
    Misi kami : 
    • Memberikan perjalanan wisata yang berkesan dengan didukung tenaga tenaga muda profesional dibidangnya serta terjangkau dan fleksibel semua lapisan masyarakat.`;

  const textToShow = text.slice(0, showCharLimit);

  return (
    <div>
      <p>{textToShow}</p>
      <button className="btn-about" onClick={handleClick}>
        lanjutkan untuk melihat...
      </button>
    </div>
  );
};

export default About;
