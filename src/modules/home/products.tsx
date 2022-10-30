import styles from "./products.module.css";
import zx9Mobile from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../../public/assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import zx7Mobile from "../../../public/assets/home/mobile/image-speaker-zx7.jpg";
import zx7Tablet from "../../../public/assets/home/tablet/image-speaker-zx7.jpg";
import zx7Desktop from "../../../public/assets/home/desktop/image-speaker-zx7.jpg";
import yx1Mobile from "../../../public/assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../../../public/assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import ButtonLink from "../../shared/components/UI/buttonLink";
import Image from "next/image";
import { useEffect, useState } from "react";

const Products = () => {
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

  const breakpointMobileWidth = 376;
  const breakpointTabletWidth = 375;
  const breakpointDesktopWidth = 1025;

  function imageSwitcherOne() {
    if (screenWidth < breakpointMobileWidth) return zx9Mobile;
    if (screenWidth > breakpointTabletWidth && screenWidth < breakpointDesktopWidth) return zx9Tablet;
    if (screenWidth > breakpointDesktopWidth - 1) return zx9Desktop;
  }

  function imageSwitcherTwo() {
    if (screenWidth < 576) return zx7Mobile;
    if (screenWidth > 575 && screenWidth < 769) return zx7Tablet;
    if (screenWidth > 768) return zx7Desktop;
  }

  function imageSwitcherThree() {
    if (screenWidth < breakpointMobileWidth) return yx1Mobile;
    if (screenWidth > breakpointTabletWidth && screenWidth < breakpointDesktopWidth) return yx1Tablet;
    if (screenWidth > breakpointDesktopWidth - 1) return yx1Desktop;
  }

  return (
    <div className={styles.products}>
      <div className={`${styles.product} ${styles.productOne}`}>
        <div className={styles.imageContainer}>
          <Image src={imageSwitcherOne()!} alt="zx9 speaker" />
        </div>
        <div className={styles.productOneContent}>
          <h2 className={styles.headerLight}>zx9 speaker</h2>
          <p className={styles.about}>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <ButtonLink className="buttonDark" text="see product" link="/product/zx9-speaker"></ButtonLink>
        </div>
      </div>
      <div className={`${styles.product} ${styles.productTwo}`}>
        <div className={styles.imageContainerTwo}>
          <Image src={imageSwitcherTwo()!} alt="zx7 speaker" />
        </div>
        <h2 className={styles.headerDark}>zx7 speaker</h2>
        <ButtonLink className="buttonTransparent" text="see product" link="/product/zx7-speaker"></ButtonLink>
      </div>
      <div className={`${styles.product} ${styles.productThree}`}>
        <div className={styles.imageContainerThree}>
          <Image src={imageSwitcherThree()!} alt="yx1 earphones" />
        </div>
        <div className={styles.productThreeContent}>
          <h2 className={styles.headerDark}>yx1 earphones</h2>
          <ButtonLink className="buttonTransparent" text="see product" link="/product/yx1-earphones"></ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
