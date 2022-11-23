import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css";
import store from "../store/store";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
