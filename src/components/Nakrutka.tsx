import css from "./nakrutka.module.css";
import { useState } from "react";

const objects = [
  {
    name: "Авито",
    id: 1,
    price: 200,
    image: "./src/assets/img/avito.png",
  },
  {
    name: "Яндекс карты",
    id: 2,
    price: 250,
    image: "src/assets/img/yandexmap.png",
  },
  {
    name: "Яндекс услуги",
    id: 3,
    price: 250,
    image: "./src/assets/img/yandexservices.png",
  },
  {
    name: "Авито пф",
    id: 4,
    price: 10,
    image: "./src/assets/img/yandex.png",
  },
  {
    name: "2гис",
    id: 5,
    price: 150,
    image: "./src/assets/img/2gis.jpg",
  },
  {
    name: "Google maps",
    id: 6,
    price: 150,
    image: "./src/assets/img/googlemap.png",
  },
  {
    name: "Telegram",
    id: 7,
    price: 10,
    image: "./src/assets/img/tg.png",
  },
  {
    name: "VK",
    id: 8,
    price: 10,
    image: "./src/assets/img/vk.png",
  },
  {
    name: "Otzovik",
    id: 9,
    price: 250,
    image: "./src/assets/img/unnamed.webp",
  },
  {
    name: "Zoon",
    id: 10,
    price: 200,
    image: "./src/assets/img/zoon.jpg",
  },
  {
    name: "Flamp",
    id: 11,
    price: 200,
    image: "./src/assets/img/flamp.svg",
  },
  {
    name: "Остальные",
    id: 12,
    price: 0,
    image: "./src/assets/img/25333.png",
  },
];

export function Nakrutka() {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState(0);
  const [getName, setGetName] = useState("");

  const parsedAmount = parseInt(amount);

  function showPrice() {
    if (amount === "" || amount[0] === "-") {
      return "0";
    } else {
      return parsedAmount * price;
    }
  }

  return (
    <section className={css.section}>
      <h1 className={css.hhh}>Выберите сервис</h1>
      <ul className={css.services__container}>
        {objects.map((x) => (
          <div className={css.ul}>
            <li
              className={css.element}
              onClick={() => {
                setPrice(x.price);
                setGetName(x.name);
              }}
            >
              <img className={css.img} src={x.image} />
              <p>{x.name}</p>
              <p>{x.price} руб</p>
            </li>
          </div>
        ))}
      </ul>
      <div className={css.calculator__cont}>
        <div className={css.left}>
          <p className={css.p}>Рассчитать сумму заказа</p>
          <input
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className={css.input}
            type="number"
            placeholder="Нужное количество отзывов"
          />
          <p className={css.p}>Сумма составляет: {showPrice()} руб</p>
        </div>
        <div className={css.right}>
          <p className={css.p}>Вы выбрали: {getName}</p>
          <a href="https://web.telegram.org/a/#6842287937" className={css.p}>
            Телеграм: <span className={css.span}>@otakuLZT</span>
          </a>
          <p className={css.p}>
            Ватсап: <span className={css.span}>+79304076411</span>
          </p>
        </div>
      </div>
    </section>
  );
}
