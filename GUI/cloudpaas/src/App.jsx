import { useState } from "react";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import OverView from "./components/OverView";
import Analytics from "./components/Analytics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Routes>
          {/* <NavLanding /> */}
          {/* <Home /> */}
          <Route path="/" element={<NavLanding />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/overview/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
