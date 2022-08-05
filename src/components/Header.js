import React from "react";
import logo from "../assets/img/vinted.png";

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <img className="logo" src={logo} alt="vinted" />
          <div className="btn">
            <button>s'inscrire</button>
            <button>se connecter</button>
            <button>vends tes articles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
