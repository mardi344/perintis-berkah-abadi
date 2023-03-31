import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+6282293593988"; // nomor telepon penerima pesan
  const message = "Halo, saya ingin tahu info tentang Rental mobil?"; // pesan yang ingin dikirim

  const handleChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleChat}>
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
