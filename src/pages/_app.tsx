import "leaflet/dist/leaflet.css";
import type { AppProps } from "next/app";
import { Catamaran } from "next/font/google";

import "@src/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <main>
    <Component {...pageProps} />
  </main>
);

export default App;
