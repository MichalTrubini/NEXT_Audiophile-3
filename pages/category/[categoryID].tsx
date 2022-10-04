import PageTitle from "../../src/modules/category/pageTitle";
import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import { useRouter } from "next/router";
import data from "../../data.json";
import ProductsCategory from "../../src/modules/category/productsCategory";
import { useState, useEffect } from "react";

const PageCategory = () => {
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

  //breakpoints for responsivity
  //these numbers can be changed based on what looks good

  const breakpointMobile = 451;
  const breakpointTablet = 450;
  const breakpointDesktop = 950;

  //size (width, height) of the original image
  //it is required to set width/height explicitly due to Image layout='responsive' props
  //these numbers are fixed and should not be changed

  const mobileWidthImage = 654;
  const mobileHeightImage = 704;
  const tabletWidthImage = 1378;
  const tabletHeightImage = 704;
  const desktopWidthImage = 1080;
  const desktopHeightImage = 1120;

  const width = () => {
    if (screenWidth < breakpointMobile) return mobileWidthImage;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletWidthImage;
    if (screenWidth > breakpointDesktop) return desktopWidthImage;
  };

  const height = () => {
    if (screenWidth < breakpointMobile) return mobileHeightImage;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletHeightImage;
    if (screenWidth > breakpointDesktop) return desktopHeightImage;
  };

  return (
    <div>
      <PageTitle title={page} />
      <div className="container">
        <div className="categoryProducts">
          {categoryData.map((item, index) => (
            <ProductsCategory
              key={item.id}
              src={
                screenWidth < breakpointMobile
                  ? item.categoryImage.mobile
                  : screenWidth > breakpointTablet &&
                    screenWidth < breakpointDesktop
                  ? item.categoryImage.tablet
                  : item.categoryImage.desktop
              }
              new={item.new}
              alt={item.name}
              className={index % 2 ? 'productEven' : 'productOdd'}
              title={item.name}
              slug={item.slug}
              about={item.description}
              width={width()!}
              height={height()!}
            />
          ))}
        </div>

        <Categories />
        <Promo />
      </div>
    </div>
  );
};

export default PageCategory;
