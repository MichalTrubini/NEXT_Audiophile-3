import styles from "./seeAlso.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import { useRouter } from "next/router";
import ButtonLink from "../../../shared/components/UI/buttonLink";
import useWindowDimensions from "../../../../utils/WindowDimensions";
import { useState, useEffect } from "react";

const SeeAlso = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));

  const { width } = useWindowDimensions();

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(width);
  }, [width]);
console.log(width)
  //breakpoints for responsivity
  //these numbers can be changed based on what looks good

  const breakpointMobile = 600;
  const breakpointTablet = 599;
  const breakpointDesktop = 950;

  //size (width, height) of the original image
  //it is required to set width/height explicitly due to Image layout='responsive' props
  //these numbers are fixed and should not be changed

  const mobileWidthImage = 654;
  const mobileHeightImage = 240;
  const tabletWidthImage = 223;
  const tabletHeightImage = 318;
  const desktopWidthImage = 700;
  const desktopHeightImage = 636;

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
    <section className={styles.others}>
      <h2 className={styles.header}>you may also like</h2>
      <div className={styles.container}>
        {productData[0].others.map((item) => (
          <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={                screenWidth < breakpointMobile
                    ? item.image.mobile
                    : screenWidth > breakpointTablet &&
                      screenWidth < breakpointDesktop
                    ? item.image.tablet
                    : item.image.desktop}
                alt={item.name}
                width={imageWidth()}
                height={imageHeight()}
                layout="responsive"
              />
            </div>
            <h2 className={styles.productHeader}>{item.name}</h2>
            <ButtonLink text="see product" className="buttonLight" link={`/product/${item.slug}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeeAlso;
