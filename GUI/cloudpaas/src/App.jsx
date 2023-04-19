import { useState } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import OverView from "./components/OverView";
import Home from "./components/Home";
import Login from "./components/login";
import { Carousel, initTE } from "tw-elements";
import Login2 from "./components/Login2";
initTE({ Carousel });

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col">
      <NavLanding />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
