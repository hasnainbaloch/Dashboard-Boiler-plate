import React, { useEffect, useState } from "react";
import { Routes } from "./routes";
import { SocketContext } from './context';
import { socket } from './config';

function App() {

  const [Socket, setSocket] = useState('not connected yet');

  useEffect(() => {
    console.log("Socket", socket);
    return () => {
      // clearInterval(socketInterval);
    }
  }, []);


  return (
    <SocketContext.Provider value={socket}>
      <Routes />
    </SocketContext.Provider>
  );
}

export default App;
