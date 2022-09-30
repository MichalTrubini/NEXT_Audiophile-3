import styles from "./products.module.css";
import zx9Mobile from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../../public/assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import Button from "../../shared/components/UI/button";
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

  function imageSwitcher() {
    if (screenWidth < 376) return zx9Mobile;
    if (screenWidth > 375 && screenWidth < 1025) return zx9Tablet;
    if (screenWidth > 1024) return zx9Desktop;
  }

  return (
    <div className={styles.products}>
      <div className={`${styles.product} ${styles.productOne}`}>
        <div className={styles.imageContainer}>
          <Image src={imageSwitcher()!} alt="zx9 speaker" />
        </div>
        <h2 className={styles.headerLight}>zx9 speaker</h2>
        <p className={styles.about}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button className="buttonDark" text="see product"></Button>
      </div>
    </div>
  );
};

export default Products;
