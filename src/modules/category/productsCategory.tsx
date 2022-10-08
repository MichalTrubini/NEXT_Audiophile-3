import styles from "./productsCategory.module.css";
import Image from "next/image";
import ButtonLink from "../../shared/components/UI/buttonLink";
import { IProductsCategory } from "../../../src/shared/types/types";

const ProductsCategory: React.FC<IProductsCategory> = (props) => {
  return (
    <div className={`${styles.product} ${props.className}`}>
      <div className={`${styles.imageMobile} ${styles.imageContainer}`}>
        <Image
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width="654"
          height="704"
        />
      </div>
      <div className={`${styles.imageTablet} ${styles.imageContainer}`}>
        <Image
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width="1378"
          height="704"
        />
      </div>
      <div className={`${styles.imageDesktop} ${styles.imageContainer}`}>
        <Image
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width="1080"
          height="1120"
        />
      </div>

      <div className={styles.content}>
        {props.new === true && <p className={styles.subtitle}>new product</p>}
        <h1 className={styles.header}>{props.title}</h1>
        <p className={styles.about}>{props.about}</p>
        <ButtonLink
          className="buttonLight"
          text="see product"
          link={`/product/${props.slug}`}
        />
      </div>
    </div>
  );
};

export default ProductsCategory;
