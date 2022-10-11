import styles from "./gallery.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import { IPage } from "../../../shared/types/types";

const Gallery:React.FC<IPage> = (props) => {

  const page = props.page;
  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <section className={styles.gallery}>
      <div className={`${styles.imageContainer} ${styles.imageMobile} ${styles.imageContainerOne}`}>
        <Image
          src={productData[0].gallery.first.mobile}
          alt={productData[0].name}
          width='654'
          height='348'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageTablet} ${styles.imageContainerOne}`}>
        <Image
          src={productData[0].gallery.first.tablet}
          alt={productData[0].name}
          width='554'
          height='348'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageDesktop} ${styles.imageContainerOne}`}>
        <Image
          src={productData[0].gallery.first.desktop}
          alt={productData[0].name}
          width='445'
          height='280'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageMobile} ${styles.imageContainerTwo}`}>
        <Image
          src={productData[0].gallery.second.mobile}
          alt={productData[0].name}
          width='654'
          height='348'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageTablet} ${styles.imageContainerTwo}`}>
        <Image
          src={productData[0].gallery.second.mobile}
          alt={productData[0].name}
          width='554'
          height='348'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageDesktop} ${styles.imageContainerTwo}`}>
        <Image
          src={productData[0].gallery.second.mobile}
          alt={productData[0].name}
          width='445'
          height='280'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageMobile} ${styles.imageContainerThree}`}>
        <Image
          src={productData[0].gallery.third.mobile}
          alt={productData[0].name}
          width='654'
          height='736'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageTablet} ${styles.imageContainerThree}`}>
        <Image
          src={productData[0].gallery.third.mobile}
          alt={productData[0].name}
          width='790'
          height='736'
          layout="responsive"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageDesktop} ${styles.imageContainerThree}`}>
        <Image
          src={productData[0].gallery.third.mobile}
          alt={productData[0].name}
          width='635'
          height='592'
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Gallery;
