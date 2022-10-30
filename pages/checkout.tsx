import CheckoutDetails from "../src/modules/checkout/checkoutDetails";
import Head from "next/head";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <CheckoutDetails />
      </div>
    </>
  );
};

export default Checkout;
