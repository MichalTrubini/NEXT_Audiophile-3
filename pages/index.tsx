import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../src/modules/home/hero";
import Categories from "../src/shared/components/category/categories";
import Promo from "../src/shared/components/content/promo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audiophile home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="container">
        <Categories />
        <Promo/>
      </div>
    </div>
  );
};

export default Home;
