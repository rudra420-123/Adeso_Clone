import React from 'react'
import "./Dropdown.css"
function Dropdown(props) {
    return (  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="/"  data-bs-toggle="dropdown">
            {props.title}
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/">{props.op1}</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">{props.op2}</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">{props.op3}</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">{props.op4}</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">{props.op5}</a></li>
           </ul>
         </li>
       </ul>
    </div>
    )
}

export default Dropdown