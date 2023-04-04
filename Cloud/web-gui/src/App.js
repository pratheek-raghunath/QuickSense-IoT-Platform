import React from 'react';
import {useEffect} from 'react';
import { io } from 'socket.io-client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import socketContext from "./context/socket"

import Navbar from "./components/Navbar"
import Visualization from './components/Visualization';
import Alert from './components/Alert';
import Action from "./components/Action"

const socket = io("http://wss.orensaldanha.live");
//const socket = io("http://localhost:3000");

function App() {

  useEffect(() => {
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

  
  // return (
  //   <socketContext.Provider value={socket}>
      
  //      <div className="App" style={{width:'800px', height:'800px'}}>
  //       <Action/>
  //       <Visualization/>
  //       <Alert/>
  //     </div>
  //   </socketContext.Provider>
  // );

  return (
    <socketContext.Provider value={socket}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Visualization />} />
            <Route path="/alerts" element={<Alert />} />
            <Route path="/actions" element={<Action />} />
          </Routes>
      </BrowserRouter>
    </socketContext.Provider>
  )
}

export default App;