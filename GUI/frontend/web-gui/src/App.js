import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Visualisation from "./components/visualisation";
import Alerts from "./components/alerts";
import Actions from "./components/actions";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Visualisation />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
