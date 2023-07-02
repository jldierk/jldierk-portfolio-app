import './nav.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import keyboard from "../../images/keyboard.png"

function NavBar() {
    return (
      <div className= "nav-bar">
        <img src={keyboard} style={{display: "inline-block", marginLeft: "20px"}}/>
        <div className="name">Jacob Dierksheide</div>
        <nav>
          <div className="nav-bar-list">
            <NavElement linkText="Home" location="/"/>
            <NavElement linkText="About" location="/about"/>
            <NavElement linkText="Sample" location="/sample"/>
          </div>          
        </nav>      
      </div>
    );
}

export function NavElement(props) {
  return (
    <span className="nav-bar-element">
        <Link to={props.location}>
          <btn>{props.linkText}</btn>
          
          {/* <span className="underline"/> */}
        </Link>
    </span>
  )
}

export default NavBar;