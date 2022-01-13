import React from "react";
import person from "../../assets/person.JPG"
function Main(){
    
    return(
        <section>

    <img className ="person" src={person} alt="Portfolio person"></img>
        
     <div className="left" >  
   <h1 className="main-color1">HELLO</h1>
   <h2 className="main-color2">I'm Junya</h2>
   <h3 className="main-color3">I'm a constant study full stack developer</h3>
   <h4 className="main-color4">This is my Portfolio</h4>
   <h5 className="main-color5">Talk soon!</h5>
   </div> 
    </section>

    )

}
export default Main;