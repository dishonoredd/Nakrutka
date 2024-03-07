import { useState } from "react";

type ServicesProps = {
  switchCost: (cost: number) => void;
};

const avitoZoonFlampPrice = 200;
const yandexMapsServicesOtzovikPrice = 250;
const AvitoPFTgWkPrice = 10;
const gisPrice = 150;

export function Services(props: ServicesProps) {
  const [choose, setChoose] = useState(0);

  return (
    <section className="services">
      <h1 className="services__title">Список услуг</h1>
      <div className="services__container">
        <div className="services__subcontainer">
          <li
            className="services__item"
            onClick={() => {
              props.switchCost(avitoZoonFlampPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(yandexMapsServicesOtzovikPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(yandexMapsServicesOtzovikPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(AvitoPFTgWkPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(gisPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(gisPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(AvitoPFTgWkPrice);
            }}
          >
            <img src="./src/assets/img/tg.png" className="services__item-img" />
            Telegram
            <br />
            10 ₽
          </li>
          <li
            className="services__item"
            onClick={() => {
              props.switchCost(AvitoPFTgWkPrice);
            }}
          >
            <img src="./src/assets/img/vk.png" className="services__item-img" />
            VK
            <br />
            10 ₽
          </li>
          <li
            className="services__item"
            onClick={() => {
              props.switchCost(yandexMapsServicesOtzovikPrice);
            }}
          >
            <img
              src="./src/assets/img/unnamed.webp"
              className="services__item-img"
            />
            Otzovik
            <br />
            250 ₽
          </li>
          <li
            className="services__item"
            onClick={() => {
              props.switchCost(avitoZoonFlampPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(avitoZoonFlampPrice);
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
            className="services__item"
            onClick={() => {
              props.switchCost(0);
            }}
          >
            <img
              src="./src/assets/img/25333.png"
              className="services__item-img"
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
