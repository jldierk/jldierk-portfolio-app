import { BrowserRouter, Route, Link } from "react-router-dom";

function NavBar() {
    return (
      <div className= "nav-bar">
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
        <Link className="nav-link" to={props.location}>
          {props.linkText}
        </Link>
        <span className="underline"/>
    </span>
  )
}

export default NavBar;