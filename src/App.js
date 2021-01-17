import React from "react";
import { Routes } from "./routes";
import { SocketContext } from './context';
import { socket } from './config';

function App() {

  return (
    <SocketContext.Provider value={socket}>
      <Routes />
    </SocketContext.Provider>
  );
}

export default App;
