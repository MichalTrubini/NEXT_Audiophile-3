import styles from "./promo.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import mobileImage from "../../../../public/assets/shared/mobile/image-best-gear.jpg";
import tabletImage from "../../../../public/assets/shared/tablet/image-best-gear.jpg";
import desktopImage from "../../../../public/assets/shared/desktop/image-best-gear.jpg";

type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }

interface UsedImage {
    src?:string | StaticImageData,
}

const Promo:React.FC<UsedImage> = () => {
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

  function imageSwitcher() {
    if (screenWidth < 376) return mobileImage;
    if (screenWidth > 375 && screenWidth < 1024 ) return tabletImage;
    if (screenWidth > 1023) return desktopImage;
  }

  return (
    <div className={styles.promo}>
      <div className={styles.imageContainer}>
        <Image src={imageSwitcher()!} alt="best gear"/>
      </div>
      <div className={styles.content}>
        <h2 className={styles.header}>Bringing you the <span className={styles.accent}>best</span> audio gear</h2>
        <p className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
  );
};

export default Promo;
