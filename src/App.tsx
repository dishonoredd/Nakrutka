import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TarifRoute } from "./components/TarifRoute";
import { Nakrutka } from "./components/Nakrutka";
import { Header } from "./components/Header";

function App() {
  return (
    <div id="content">
      <Routes>
        <Route element={<Header />}>
          <Route path="" index element={<TarifRoute />} />
          <Route path="/nakrutka" element={<Nakrutka />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
