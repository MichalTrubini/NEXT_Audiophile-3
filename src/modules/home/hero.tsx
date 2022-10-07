import ButtonLink from "../../shared/components/UI/buttonLink";
import styles from "./hero.module.css";

const Hero = () => {

  return (
    <div className={styles.hero}>
      <div className='container'>
      <div className={styles.content}>
        <p className={styles.subtitle}>new product</p>
        <h1 className={styles.header}>XX99 Mark II HeadphoneS</h1>
        <p className={styles.about}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonLink className="buttonLight" text="see product" link='/product/xx99-mark-two-headphones'/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
