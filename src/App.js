import React, { useEffect, useState } from "react";
import { Routes } from "./routes";
import { SocketContext } from './context';

function App() {

  const [fakeSocket, setFakeSocket] = useState(null)
  let count = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      count++;
      setFakeSocket(count+" Fake socket count");
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <SocketContext.Provider value={fakeSocket}>
      <Routes />
    </SocketContext.Provider>
  );
}

export default App;
