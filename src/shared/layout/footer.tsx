import styles from "./footer.module.css";
import Image from "next/image";
import facebook from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../public/assets/shared/desktop/icon-instagram.svg";
import SiteNavigation from "../components/UI/siteNavigation";
import Logo from "../components/UI/logo";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <SiteNavigation />
        <p className={styles.about}>
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we&apos;re open 7 days a week.
        </p>

        <p className={styles.copyright}>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        <div className={styles.socialBlock}>
          <Image src={facebook} alt="facebook" className={styles.social}/>
          <Image src={twitter} alt="twitter" className={styles.social}/>
          <Image src={instagram} alt="instagram" className={styles.social}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
