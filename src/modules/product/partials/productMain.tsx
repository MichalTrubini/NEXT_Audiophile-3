import Image from "next/image";
import styles from "./productMain.module.css";
import data from "../../../../data.json";
import { useRouter } from "next/router";
import useWindowDimensions from "../../../../utils/WindowDimensions";
import { useState, useEffect } from "react";
import AddToCart from "./addToCart";

const ProductMain = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));

  const { width } = useWindowDimensions();

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(width);
  }, [width]);

  //breakpoints for responsivity
  //these numbers can be changed based on what looks good

  const breakpointMobile = 600;
  const breakpointTablet = 599;
  const breakpointDesktop = 950;

  //size (width, height) of the original image
  //it is required to set width/height explicitly due to Image layout='responsive' props
  //these numbers are fixed and should not be changed

  const mobileWidthImage = 654;
  const mobileHeightImage = 654;
  const tabletWidthImage = 562;
  const tabletHeightImage = 960;
  const desktopWidthImage = 1080;
  const desktopHeightImage = 1120;

  const imageWidth = () => {
    if (screenWidth < breakpointMobile) return mobileWidthImage;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletWidthImage;
    if (screenWidth >= breakpointDesktop) return desktopWidthImage;
  };

  const imageHeight = () => {
    if (screenWidth < breakpointMobile) return mobileHeightImage;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletHeightImage;
    if (screenWidth >= breakpointDesktop) return desktopHeightImage;
  };

  return (
    <div className={styles.productIntro}>
      <div className={styles.imageContainer}>
        <Image
          src={
            screenWidth < breakpointMobile
              ? productData[0].image.mobile
              : screenWidth > breakpointTablet &&
                screenWidth < breakpointDesktop
              ? productData[0].image.tablet
              : productData[0].image.desktop
          }
          alt={productData[0].name}
          layout="responsive"
          width={imageWidth()}
          height={imageHeight()}
        />
      </div>
      <div className={styles.content}>
        {productData[0].new && <p className={styles.subtitle}>new product</p>}
        <h1 className={styles.title}>{productData[0].name}</h1>
        <p className={styles.about}>{productData[0].description}</p>
        <p className={styles.price}>{`$ ${productData[0].price.toLocaleString(
          "en-US"
        )}`}</p>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductMain;
