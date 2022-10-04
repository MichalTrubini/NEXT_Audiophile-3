import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import data from "../../data.json";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductTemplate from "../../src/modules/product/productTemplate";

const ProductSingle = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));
  console.log(productData);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const widthInitial = window.innerWidth;
    setScreenWidth(widthInitial);

    function getWindowDimensions() {
      const widthCurrent = window.innerWidth;
      return widthCurrent;
    }

    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <ProductTemplate
        srcMain={productData[0].image.mobile}
        altMain={productData[0].name}
        width={1000}
        height={1100}
        title={productData[0].name}
        about={productData[0].description}
        price={productData[0].price}
        features={productData[0].features}
        new={productData[0].new}
      />
      <Categories />
      <Promo />
    </div>
  );
};

export default ProductSingle;
