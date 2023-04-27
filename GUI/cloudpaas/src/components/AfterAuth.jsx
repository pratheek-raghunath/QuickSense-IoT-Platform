import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavUser from "../NavUser";
import userContext from "../context/userContext";
import { io } from "socket.io-client";


const onLogout = () => {
  localStorage.removeItem("user");
  return navigate("/");
}

const AfterAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    socket: null,
    user: null,
    isLoggedIn: false,
  });

  useEffect(() => {
    const user_data = JSON.parse(localStorage.getItem("user"));

    if (!user_data || user_data === "undefined") {
      setUser({
        user: null,
        isLoggedIn: false,
      });
      return navigate("/login");
    }

    const socket = io("http://wss.orensaldanha.live", {
      query: {
        user_id: user_data.user_id,
      },
    });

    setUser({
      socket: socket,
      user: user_data,
      isLoggedIn: true,
    });

    function onConnect() {
      console.log("websocket connected");
    }

    function onDisconnect() {
      console.log("websocket disconnected");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  if (user.isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <userContext.Provider value={{ socket: user.socket, user: user.user }}>
          <NavUser />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </div>
    );
  } else {
    return null;
  }
};

export default AfterAuth;
