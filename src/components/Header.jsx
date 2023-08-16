import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { mode } = useContext(ThemeContext);

  return (
    <header className={mode}>
      <nav>
        <div>
          <img className="logo" src={Logo} />
        </div>

        <div>
          <ul className="gap-2">
            <li>
              <Link className="active" to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Discover</Link>
            </li>
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <button className="outline">SignUp</button>
            </li>
            <li>
              <button>Log In</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
