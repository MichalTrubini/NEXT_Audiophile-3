import styles from "./gallery.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import { useRouter } from "next/router";
import useWindowDimensions from '../../../../utils/WindowDimensions'
import { useState, useEffect } from "react";

const Gallery = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));

  const {width} = useWindowDimensions();

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

  const mobileWidthImageSmall = 654;
  const mobileHeightImageSmall = 348;
  const tabletWidthImageSmall = 554;
  const tabletHeightImageSmall = 348;
  const desktopWidthImageSmall = 445;
  const desktopHeightImageSmall = 280;

  const mobileWidthImageLarge = 654;
  const mobileHeightImageLarge = 736;
  const tabletWidthImageLarge = 790;
  const tabletHeightImageLarge = 736;
  const desktopWidthImageLarge = 635;
  const desktopHeightImageLarge = 592;

  const imageWidthSmall = () => {
    if (screenWidth < breakpointMobile) return mobileWidthImageSmall;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletWidthImageSmall;
    if (screenWidth >= breakpointDesktop) return desktopWidthImageSmall;
  };

  const imageHeightSmall = () => {
    if (screenWidth < breakpointMobile) return mobileHeightImageSmall;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletHeightImageSmall;
    if (screenWidth >= breakpointDesktop) return desktopHeightImageSmall;
  };

  const imageWidthLarge = () => {
    if (screenWidth < breakpointMobile) return mobileWidthImageLarge;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletWidthImageLarge;
    if (screenWidth >= breakpointDesktop) return desktopWidthImageLarge;
  };

  const imageHeightLarge = () => {
    if (screenWidth < breakpointMobile) return mobileHeightImageLarge;
    if (screenWidth > breakpointTablet && screenWidth < breakpointDesktop)
      return tabletHeightImageLarge;
    if (screenWidth >= breakpointDesktop) return desktopHeightImageLarge;
  };

  return (
    <section className={styles.gallery}>
      <div className={`${styles.imageContainer} ${styles.imageContainerOne}`}>
        <Image
          src={productData[0].gallery.first.mobile}
          alt={productData[0].name}
          width={imageWidthSmall()}
          height={imageHeightSmall()}
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageContainerTwo}`}>
        <Image
          src={productData[0].gallery.second.mobile}
          alt={productData[0].name}
          width={imageWidthSmall()}
          height={imageHeightSmall()}
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageContainerThree}`}>
        <Image
          src={productData[0].gallery.third.mobile}
          alt={productData[0].name}
          width={imageWidthLarge()}
          height={imageHeightLarge()}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Gallery;
