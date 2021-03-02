import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"
import {extendTheme} from "@chakra-ui/react"
import CardComponent from "./CardComponentFold";

const colors = {
  background: {
    200: "#f0ecf1",
    pink:{
      800: "#ee5a6c"
    },
    blue:{
      800: "#04093f"
    }
  },
  color: {
    800: "#211b23",
    700: "#515978",
    200: "#ffffff"
  },
}

const fontSizes = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "16px"
}

const Form = {
  parts: ["form", "input"],
  baseStyle: {
    form: {
      boxShadow: "lg",
      flexDirection: "column",
    },
    input: {
      fontWeight: "medium",
      lineHeight: "normal",
      color: "gray.600",
      backgroundColor: "white",
      borderRadius: 0,
    },
  },
  sizes: {
    sm: {
      input: {
        fontSize: "0.75rem",
        px: 2,
        py: 1,
      },
    },
    md: {
      input: {
        fontSize: "0.875rem",
        px: 3,
        py: 2,
      },
    },
  },
  defaultProps: {
    size: "md",
  },
}


const theme = extendTheme({
  colors,
  fontSizes,
  components: {
    Form,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CardComponent/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
