import "../Navstyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">Visualisation</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/actions">Actions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
