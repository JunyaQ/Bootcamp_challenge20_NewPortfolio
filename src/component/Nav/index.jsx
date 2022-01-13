import React from "react";
function Nav(){
  const onClickHandler = () => {
    console.log("click handled")
  }
    return (
<section className="nav-bar">
<ul>
  <li className="nav-item"><a href="#about" onClick={() =>onClickHandler()}>About Me</a></li>
  <li className="nav-item"><a href="#portfolio" onClick={() =>onClickHandler()}>Portfolio</a></li>
  <li className="nav-item"><a href="#contact" onClick={() =>onClickHandler()}>Contact</a></li>
  <li className="nav-item"><a href="#resume" onClick={() =>onClickHandler()}>Resume</a></li> 
</ul>
</section>
    )
}

export default Nav;