import { useState } from "react";
import { Calculator } from "./Calculator";
import { Footer } from "./Footer";
import { MainPage } from "./MainPage";
import { Services } from "./Services";
import { Header } from "./Header";

export function TarifRoute() {
  const [price, setPrice] = useState(0);

  function switchPrice(index: number) {
    setPrice(index);
  }
  return (
    <div className="">
      <div className="main">
        <MainPage />
        <Services switchCost={switchPrice} />

        <Footer />
      </div>
    </div>
  );
}
