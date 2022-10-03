import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import data from "../../data.json";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductSingle = () => {
  const router = useRouter();
  const page = String(router.query.categoryID);

  const categoryData = data.filter((item) => item.category.includes(page));

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
      <Categories />
      <Promo />
    </div>
  );
};

export default ProductSingle;
