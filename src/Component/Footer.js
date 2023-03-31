import React from "react";
import "./Styles/Style-footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="email">
        <a href="mailto:perintisberkahabadi@gmail.com?subject=Judul Email&body=Pesan Default">
          <FontAwesomeIcon icon={faEnvelope} />
          Send Email
        </a>
        <p>TLP : (+62) 82293593988</p>
      </div>
      <div>
        <p>
          Jl tamalanrea raya blok 9m22 kec tamalanrea kel tamalanrea kota
          makassar, kode pos 90245
        </p>
      </div>
      <div className="copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
