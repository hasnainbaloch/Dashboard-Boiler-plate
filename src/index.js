import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store'
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

