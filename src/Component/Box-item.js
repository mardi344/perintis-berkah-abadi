import React from "react";
import "./Styles/Style-box.css";

const BoxItem = () => {
  return (
    <div className="box">
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img
            src={`${process.env.PUBLIC_URL}./image-car/inova.png`}
            alt="inova"
          />
        </div>
        <div className="title">
          <h1>Toyota Inova</h1>
        </div>
      </div>
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img
            src={`${process.env.PUBLIC_URL}./image-car/pajero.png`}
            alt="pajero"
          />
        </div>
        <div className="title">
          <h1>Pajero</h1>
        </div>
      </div>
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img
            src={`${process.env.PUBLIC_URL}./image-car/fotuner.png`}
            alt="fortuner"
          />
        </div>
        <div className="title">
          <h1>Fortuner</h1>
        </div>
      </div>
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img
            src={`${process.env.PUBLIC_URL}./image-car/avanza.png`}
            alt="avanza"
          />
        </div>
        <div className="title">
          <h1>Avanza</h1>
        </div>
      </div>
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img
            src={`${process.env.PUBLIC_URL}./image-car/hiace.png`}
            alt="hiace"
          />
        </div>
        <div className="title">
          <h1>Hiace</h1>
        </div>
      </div>
      <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/bus.png`} alt="bus" />
        </div>
        <div className="title">
          <h1>Bus</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
