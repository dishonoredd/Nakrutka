import { useState } from "react";

type ServicesProps = {
  switchCost: (cost: number) => void;
};

export function Services(props: ServicesProps) {
  const [choose, setChoose] = useState(0);

  return (
    <section className="services">
      <h1 className="services__title">Список услуг</h1>
      <div className="services__container">
        <div className="services__nav">
          <button type="button" className="services__nav--btn-active">
            Отзывы
          </button>
          <button type="button" className="services__nav--btn">
            Накрутка
          </button>
        </div>
        <div className="services__subcontainer">
          <li
            className={`services__item ${
              choose === 1 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(1);
              props.switchCost(200);
            }}
          >
            <img
              src="./src/assets/img/avito.png"
              className="services__item-img"
            />
            Авито
            <br />
            200 ₽
          </li>
          <li
            className={`services__item ${
              choose === 2 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(2);
              props.switchCost(250);
            }}
          >
            <img
              src="./src/assets/img/yandexmap.png"
              className="services__item-img"
            />
            Яндекс Карты
            <br />
            250 ₽
          </li>
          <li
            className={`services__item ${
              choose === 3 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(3);
            }}
          >
            <img
              src="./src/assets/img/yandexservices.png"
              className="services__item-img"
            />
            Яндекс Услуги
            <br />
            250 ₽
          </li>
          <li
            className={`services__item ${
              choose === 4 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(4);
            }}
          >
            <img
              src="./src/assets/img/yandex.png"
              className="services__item-img"
            />
            Авито пф
            <br />
            10 ₽
          </li>
          <li
            className={`services__item ${
              choose === 5 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(5);
            }}
          >
            <img
              src="./src/assets/img/2gis.jpg"
              className="services__item-img"
            />
            2гис
            <br />
            150 ₽
          </li>
          <li
            className={`services__item ${
              choose === 6 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(6);
            }}
          >
            <img
              src="./src/assets/img/googlemap.png"
              className="services__item-img"
            />
            Google Maps
            <br />
            150 ₽
          </li>
        </div>
        <div className="services__subcontainer">
          <li
            className={`services__item ${
              choose === 7 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(7);
            }}
          >
            <img src="./src/assets/img/tg.png" className="services__item-img" />
            Telegram
            <br />
            10 ₽
          </li>
          <li
            className={`services__item ${
              choose === 8 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(8);
            }}
          >
            <img src="./src/assets/img/vk.png" className="services__item-img" />
            VK
            <br />
            10 ₽
          </li>
          <li
            className={`services__item ${
              choose === 9 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(9);
            }}
          >
            <img
              src="./src/assets/img/otzovik.svg"
              className="services__item-img"
              style={{
                borderRadius: "0",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            />
            Otzovik
            <br />
            250 ₽
          </li>
          <li
            className={`services__item ${
              choose === 10 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(10);
              // props.switchCost(avitoZoonFlampPrice);
            }}
          >
            <img
              src="./src/assets/img/zoon.jpg"
              className="services__item-img"
            />
            Zoon
            <br />
            200 ₽
          </li>
          <li
            className={`services__item ${
              choose === 11 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(11);
              // props.switchCost(avitoZoonFlampPrice);
            }}
          >
            <img
              src="./src/assets/img/flamp.svg"
              className="services__item-img"
            />
            Flamp
            <br />
            200 ₽
          </li>
          <li
            className={`services__item ${
              choose === 12 ? "service__item_active" : ""
            }`}
            onClick={() => {
              setChoose(12);
            }}
          >
            <img
              src="./src/assets/img/unknown.png"
              className="services__item-img"
              style={{ borderRadius: "0", width: "70px" }}
            />
            Остальные
            <br />
            ? ₽
            <br />
            (уточнять)
          </li>
        </div>
      </div>
    </section>
  );
}
