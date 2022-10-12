import "../src/shared/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/shared/layout/layout";
import { CartProvider } from "../src/store/cart-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
