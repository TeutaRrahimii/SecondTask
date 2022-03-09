import React from "react";
import "./Domain.css";

const EachDomain = (props)=> (
    <div className="Domain">
        <div className="Domains-size">
        <div className="D-name">{props.name}</div>
        <div className="D-price">{props.price}</div>
        <div className="D-description">{props.description}</div>
        <div className="D-button">{props.button}</div>
        
        </div>
    </div>
);
export default EachDomain;