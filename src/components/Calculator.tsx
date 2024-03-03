import { useState } from "react";
import css from "./calculator.module.css";

type CalculatorProps = {
  price: number;
};

export function Calculator(props: CalculatorProps) {
  const [amount, setAmount] = useState("");
  const parsedAmount = parseInt(amount);

  return (
    <section className={css.calculator__section}>
      <div className="">
        <p className={css.p}>Рассчитать сумму заказа</p>
        <input
          className={css.input}
          type="number"
          placeholder="  Количество отзывов"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <div className={css.sum}>
          Сумма составляет: {amount === "" ? "0" : parsedAmount * props.price}{" "}
          руб
        </div>
      </div>
    </section>
  );
}
