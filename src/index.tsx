import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, Theme, extendTheme} from "@chakra-ui/react"
import CardComponent from "./CardComponentFold";
import customTheme from './theme';

const theme: Theme = extendTheme(customTheme)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CardComponent/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);