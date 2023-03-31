import React from "react";
import "./Styles/Style-box.css";

const BoxItem = () => {
  return (
    <div className="box">
      <div className="box-item ">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/inova.png`} />
        </div>
        <div className="title">
          <h1>Toyota Inova</h1>
        </div>
      </div>
      <div className="box-item">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/pajero.png`} />
        </div>
        <div className="title">
          <h1>Pajero</h1>
        </div>
      </div>
      <div className="box-item">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/fotuner.png`} />
        </div>
        <div className="title">
          <h1>Fortuner</h1>
        </div>
      </div>
      <div className="box-item">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/avanza.png`} />
        </div>
        <div className="title">
          <h1>Avanza</h1>
        </div>
      </div>
      <div className="box-item">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/hiace.png`} />
        </div>
        <div className="title">
          <h1>Hiace</h1>
        </div>
      </div>
      <div className="box-item">
        <div className="unit">
          <img src={`${process.env.PUBLIC_URL}./image-car/bus.png`} />
        </div>
        <div className="title">
          <h1>Bus</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
