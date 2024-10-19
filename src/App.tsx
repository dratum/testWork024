import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import PricePlansPage from "./components/PricePlansPage/PricePlansPage";
import PagesPage from "./components/PagesPage/PagesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/price-plans"} element={<PricePlansPage />} />
        <Route path={"/pages"} element={<PagesPage />} />
      </Routes>
    </>
  );
}

export default App;
