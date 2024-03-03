export function Header() {
  return (
    <header className="header">
      {/* <!-- <a href="./">
        </a> --> */}
      <nav className="header__nav">
        <li>
          <a href="./tarif.html" className="nav-link">
            Тарифы
          </a>
        </li>
        <li>
          <a href="#reviews" className="nav-link">
            Контакты
          </a>
        </li>
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
  );
}
