import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Services } from "./components/Services";

function App() {
  const [price, setPrice] = useState(0);

  function switchPrice(index: number) {
    setPrice(index);
  }

  return (
    <div id="content">
      <Header />
      <div className="main">
        <MainPage />
        <Services switchCost={switchPrice} />
        <Calculator price={price} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
