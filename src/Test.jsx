import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Test({ phones }) {
  return (
    <div className="container-main-div">
      {phones.map((props) => (
        <div className="phone-card-div" key={props.id}>
          {/* <Link to={`/products/${item.phonemodel}`}> */}
          <img src={props.phoneimg} alt="iphone15pro" className="phone-img" />
          <p className="phone-model-name">{props.phonemodel}</p>
          <p className="phone-model-price">{props.phoneprice}</p>

          {/* </Link> */}
        </div>
      ))}

      {/* <div className="phone-card-div">
        <img
          src="https://phones-mk-images.s3.eu-central-1.amazonaws.com/97264/apple_iphone_15_pro.jpg"
          alt="iphone15pro"
          className="phone-img"
        />
        <p className="phone-model-name">Apple iPhone 15 Pro</p>
        <p className="phone-model-price">71.980 Den</p>
      </div>
      <div className="phone-card-div">
        <img
          src="https://phones-mk-images.s3.eu-central-1.amazonaws.com/97915/samsung_galaxy_s24_ultra.jpg"
          alt="samsung24ultra"
          className="phone-img"
        />
        <p className="phone-model-name">Samsung S24 Ultra</p>
        <p className="phone-model-price">61.490 Den</p>
      </div>
      <div className="phone-card-div">
        <img
          src="https://phones-mk-images.s3.eu-central-1.amazonaws.com/92565/xiaomi_13_ultra.jpg"
          alt="xiaomi13ultra"
          className="phone-img"
        />
        <p className="phone-model-name">Xiaomi 13 Ultra</p>
        <p className="phone-model-price">45.500 Den</p>
      </div>
      <div className="phone-card-div">
        <img
          src="https://phones-mk-images.s3.eu-central-1.amazonaws.com/96112/oneplus_12.jpg"
          alt="oneplus12"
          className="phone-img"
        />
        <p className="phone-model-name">OnePlus 12</p>
        <p className="phone-model-price">42.990 Den</p>
      </div> */}
    </div>
  );
}

export default Test;
