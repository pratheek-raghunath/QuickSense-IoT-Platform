import { useState } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import OverView from "./components/OverView";
import Home from "./components/Home";
import NavUser from "./NavUser";
import Login from "./components/login";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
