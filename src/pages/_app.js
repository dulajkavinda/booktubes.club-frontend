import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { StoreProvider } from "easy-peasy";
import { createStore } from "easy-peasy";

import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
