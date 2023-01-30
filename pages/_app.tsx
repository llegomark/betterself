import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { Provider } from "react-wrap-balancer";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
