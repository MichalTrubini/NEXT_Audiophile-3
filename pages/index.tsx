import type { NextPage } from "next";
import Head from "next/head";
import Categories from "../src/shared/components/category/categories";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
