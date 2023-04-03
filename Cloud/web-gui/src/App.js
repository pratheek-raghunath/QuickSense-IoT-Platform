import React from 'react';
import {useEffect} from 'react';
import { io } from 'socket.io-client';

import socketContext from "./context/socket"

import Visualization from './components/Visualization';

const socket = io("http://wss.orensaldanha.live");

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

  
  return (
    <socketContext.Provider value={socket}>
       <div className="App" style={{width:'800px', height:'800px'}}>
        <Visualization/>
        {/* <Alert />
        <Action /> */}
      </div>
    </socketContext.Provider>
  );
}

export default App;