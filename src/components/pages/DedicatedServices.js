import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./DedicatedServices.css";
function DedicatedServices() {
   
  const [data, setData] = useState(false)

    function changeData(){
        setData( "How does Parkname seperates itself from other domain name parking companies?")
    }

    const [text, setText] = useState(false)

        function changeText(){
            setText( "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.  ")
        }
  
   
    return(
        <>
        <div className="FullBox" onClick={changeData}>
            <div className="AboutUS"><img className="photo"  ></img>
                 <div className="about"><h4>About US</h4><p>1 article in this topic</p></div> 
             </div>
            <div className="Text" onClick={changeText}>
                {data} 
                 <div className="OtherText">{text}</div>   
            </div>
        </div>
        
        </>

    )
  }
  
  export default DedicatedServices