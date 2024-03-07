import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header">
        {/* <!-- <a href="./">
        </a> --> */}
        <nav className="header__nav">
          <Link to="">
            <p className="nav-link">Тарифы</p>
          </Link>
          <Link to="/nakrutka">
            <p className="nav-link">Накрутка</p>
          </Link>
        </nav>
        {/* <!-- <a href="#contacts" className="call-btn">Sign up</a> --> */}
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" form="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#about">
                About us
              </a>
            </li>
            <li>
              <a className="menu__item" href="#teachers">
                Teachers
              </a>
            </li>
            <li>
              <a className="menu__item" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="menu__item" href="#contacts">
                Contacts
              </a>
            </li>
            <li>
              <a className="menu__item" href="https://x.com/blitzbrainly">
                <img src="./assets/img/twitter.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}
