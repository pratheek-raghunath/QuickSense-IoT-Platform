import { useContext, createContext, useState, useEffect } from "react";
import "./App.css";
import NavLanding from "./NavLanding";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

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

const userContext = createContext();

const AfterAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    socket: null,
    user: null,
    isLoggedIn: false
  });

  useEffect(() => {
    const user_data = JSON.parse(localStorage.getItem('user'));

    if (!user_data || user_data === 'undefined') {
        setUser({
          user: null,
          isLoggedIn: false
        });
        return navigate('/login');
    }

    const socket = io("http://wss.orensaldanha.live", {
      query: {
          "user_id": user_data.user_id
      }
    });

    setUser({
      socket: socket,
      user: user_data,
      isLoggedIn: true
    });

    function onConnect() {
      console.log("websocket connected")
    }

    function onDisconnect() {
      console.log("websocket disconnected")
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  
  if(user.isLoggedIn) {
    return (
      <div>
        <userContext.Provider value={{socket: user.socket, user: user}}>
          <div>after-auth-header</div>
            <Outlet/>
          <div>after-auth-footer</div>
        </userContext.Provider>
      </div>
    )
  } else {
    return null
  }
}


const Visualization = () => {
  return (
    <div>
      Visualization
    </div>
  )
}

const Alerts = () => {
  const { socket, user }  = useContext(socketContext);

  const [alerts, setAlerts] = useState([]);

  const latestalerts = [...alerts].reverse();

  console.log(alerts);

  useEffect(() => {
    function onAlert(value) {
      let alert = JSON.parse(value);
      setAlerts((previous) => [...previous, alert]);
    }

    socket.on(`/${user.user_id}/alert`, onAlert);

    return () => {
      socket.off(`/${user.user_id}/alert`, onAlert);
    };
  }, []);

  return (
    <div>
      <div className="bg-red m-20  flex flex-col items-center rounded-lg border border-gray-200  p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h1 id="alert" class="mb-2 text-2xl font-bold tracking-tight ">
        Alerts in real time
      </h1>
      <ul class="font-normal text-gray-700 dark:text-gray-400">
        {latestalerts.map((alert) => {
          return (
            <li class="w-[90vw] p-6" key={alert.timestamp}>
              <div
                id="container"
                class="rounded-t  border border-black bg-white px-4 py-2 font-bold text-white"
              >
                {alert.sensor}
              </div>
              <div
                id="container"
                class=" flex flex-col rounded-b border border-t-0 border-black  px-4 py-3 text-black"
              >
                <div className="text-start">{alert.message}</div>

                <div className="items-end justify-end text-start">
                  {alert.timestamp.substr(11, 10)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
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
                <Route path='alert' element={ <Alerts />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
