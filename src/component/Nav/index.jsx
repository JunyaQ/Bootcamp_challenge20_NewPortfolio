import React from "react";
function Nav(props){
 
const navbar = ["About","Portfolio","Contact","Resume","Main"];
    return (
<section className="nav-bar">
<ul>
  {navbar.map(item=>(
    <li className="nav-item" key={item}>
      <a href={"#"+item}
      onClick={()=> props.handlePageChange(item)}
      className={props.currentPage === item ? 'nav-link active' : 'nav-link'}>
        {item}
      </a>
    </li>
  ))}
</ul>
</section>
 )
}
export default Nav;