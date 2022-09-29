import Button from "../../shared/components/UI/button";
import styles from "./hero.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import heroMobile from "../../../public/assets/home/mobile/image-header.jpg";
import heroTablet from "../../../public/assets/home/tablet/image-header.jpg";
import heroDesktop from "../../../public/assets/home/desktop/image-hero.jpg";


const Hero = () => {

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
    if (screenWidth < 768) return heroMobile;
    if (screenWidth > 767 && screenWidth < 1025 ) return heroTablet;
    if (screenWidth > 1024) return heroDesktop;
  }


  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>new product</p>
        <h1 className={styles.header}>XX99 Mark II HeadphoneS</h1>
        <p className={styles.about}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button className="buttonLight" text="see product" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={imageSwitcher()!} alt="hero" layout="fill"/>
      </div>
    </div>
  );
};

export default Hero;
