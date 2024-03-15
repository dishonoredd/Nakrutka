import { Outlet } from "react-router-dom";

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
    </footer>
  );
}
