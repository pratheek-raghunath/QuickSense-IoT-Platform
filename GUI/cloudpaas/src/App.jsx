import { useState } from "react";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col">
      <NavLanding />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}
export default App;
