import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="">
            Portfolio
          </a>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Home
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#About" className="nav-list-item__link">
                About
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#Service" className="nav-list-item__link">
                Services
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#Skill" className="nav-list-item__link">
                Skills
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Work
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-list-item__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
