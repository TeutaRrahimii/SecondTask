import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./WebHosting.css";

function WebHosting() {

  const [text, setText] = useState(false)

  function changeText(){
    setText( "Parkname is the leading industry standar for domain name parking and monetization services. We offer a wide variety of services to help you achive success")
  }

  return(
    <>
        <div className="W-box">
        <div className="W-button" onClick={changeText}>Why park a domain name in parkname ? </div>
        <span className="W-text">{text}</span>
        </div>
    </>
  )
}

export default WebHosting;