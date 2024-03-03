export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#">
          {/* <img src="./assets/img/logo.jpg" className="footer__logo" /> */}
        </a>
        <b>Накрутка ©2024</b>
      </div>
      <p>
        <span>
          Тг:
          <a href="https://x.com/blitzbrainly">
            <img src="./src/assets/img/tg.png" className="twiter__logo" />
          </a>
        </span>
        Ватсап: +79304076411
      </p>
      <nav className="footer__nav">
        <li>
          <a href="#about" className="nav-link">
            About us
          </a>
        </li>
        <li>
          <a href="#teachers" className="nav-link">
            Teachers
          </a>
        </li>
        <li>
          <a href="#reviews" className="nav-link">
            Reviews
          </a>
        </li>
        <li>
          <a href="#contacts" className="nav-link">
            Contacts
          </a>
        </li>
      </nav>
    </footer>
  );
}
