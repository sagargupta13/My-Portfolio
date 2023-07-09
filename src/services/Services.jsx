import React from "react";
import "./Services.css";
import { FaGithub } from "react-icons/fa";

const Services = (props) => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">SERVICES</h3>
            <h1 className="mainHeader">My Services</h1>
            <p className="mainContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ad
              excepturi amet ea accusamus.
            </p>
            <div className="commonBorder"></div>
          </div>
          <div className="row">
          {props.details.map((value, index) => (
            <div className="col-4">
                <div className="services__box" key={index}>
<FaGithub className="commonIcons"/>
<div className="services__box-header">{value.title}</div>
<div className="services__box-p">{value.description}</div>
                </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
