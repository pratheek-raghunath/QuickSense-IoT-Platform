import { useState } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import OverView from "./components/OverView";
import Home from "./components/Home";
import { Carousel, initTE } from "tw-elements";
import Login2 from "./components/Login2";
import SignUp from "./components/SignUp";
import BeforeAuth from "./components/BeforeAuth";
import AfterAuth from "./components/AfterAuth";
import NavUser from "./NavUser";
initTE({ Carousel });

function App() {
  const [count, setCount] = useState(0);

  // return (
  //   <div className="flex min-h-screen flex-col">
  //     <NavLanding />
  //     {/* <NavUser /> */}
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/overview" element={<OverView />} />
  //         <Route path="/login" element={<Login2 />} />
  //         <Route path="/signUp" element={<SignUp />} />
  //         {/* <Route path="/login2" element={<Login2 />} /> */}
  //       </Routes>
  //     </BrowserRouter>
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="flex min-h-screen flex-col">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<BeforeAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<OverView />} />
                <Route path="/login" element={<Login2 />} />
                <Route path="/signUp" element={<SignUp />} />
              </Route>
              <Route path="/dashboard" element={<AfterAuth />}>
                  <Route path="" element={<OverView />} />
                  {/* <Route path='alert' element={ <Alerts />} /> */}
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
