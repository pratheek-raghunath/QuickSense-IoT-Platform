import { useState, useEffect } from "react";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

const BeforeAuth = () => {
  //navigate to dashboard automatically if auth token is present in local storage
  return (
    <div>
      <div>Header-Before-Auth</div>
      <Outlet />
      <div>footer-Before-Auth</div>
    </div>
  )
}

const Landing = () => {
  return (
    <div>
      Landing
    </div>
  )
} 

const Login = () => {
  return (
    <div>
      Login
    </div>
  )
} 

const AfterAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn && <div>Header-After-Auth</div>}
      <Outlet />
      {isLoggedIn && <div>Footer-After-Auth</div>}
    </div>
  )
}

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
      const userToken = localStorage.getItem('user-token');
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
          return navigate('/login');
      }
      setIsLoggedIn(true);
  }
  useEffect(() => {
          checkUserToken();
      }, [isLoggedIn]);
  return (
      <div>
          {
              isLoggedIn ? props.children : null
          }
      </div>
  );
}


const Visualization = () => {
  return (
    <div>
      Visualization
    </div>
  )
}

const Alerts = () => {
  return (
    <div>
      Alerts
    </div>
  )
}



function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
            <Route path='/' element={<BeforeAuth />}>
                <Route path='/' element={<Landing/>} />
                <Route path='login' element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<AfterAuth />}>
                <Route path='' element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
