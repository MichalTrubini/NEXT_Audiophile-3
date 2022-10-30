import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import ProductTemplate from "../../src/modules/product/productTemplate";
import data from "../../data.json";
import { NextPage } from "next";
import { IPage } from "../../src/shared/types/types";
import Head from "next/head";

const ProductSingle: NextPage<IPage> = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page}</title>
        <meta name="description" content={`Audiophile ${page}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <ProductTemplate page={page} />
        <Categories />
        <Promo />
      </div>
    </>
  );
};

export async function getStaticProps(context: any) {
  const page: string = String(context.params.productID);

  return {
    props: {
      page: page,
    },
  };
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({ params: { productID: item.slug } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default ProductSingle;
