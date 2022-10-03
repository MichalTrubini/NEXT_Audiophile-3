import styles from "./productTemplate.module.css";
import Image from "next/image";
import Button from "../../shared/components/UI/button";

interface ProductTemplate {
  title: string;
  srcMain: string;
  altMain: string;
  about: string;
  price: number;
  features: string;
  includesQty: number;
  includes: string;
  srcGalleryOne: string;
  altGalleryOne: string;
  srcGalleryTwo: string;
  altGalleryTwo: string;
  srcGalleryThree: string;
  altGalleryThree: string;
  srcOtherOne: string;
  altOtherOne: string;
  srcOtherTwo: string;
  altOtherTwo: string;
  srcOtherThree: string;
  altOtherThree: string;
}

const productTemplate: React.FC<ProductTemplate> = (props) => {
  return (
    <div>
      <div>
        <div className={styles.imageContainer}>
          <Image src={props.srcMain} alt={props.altMain} />
        </div>
        <div className={styles.content}>
          <p>new product</p>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.about}>{props.about}</p>
          <p className={styles.price}>{`$ ${props.price}`}</p>
          <form className={styles.form}>
            <input type="number" />
            <Button className="buttonLight" text="add to cart"></Button>
          </form>
        </div>
      </div>
      <div className={styles.features}>
        <h2 className={styles.featuresHeader}>features</h2>
        <p className={styles.featuresContent}>{props.features}</p>
      </div>
      <div className={styles.box}>
        <h2 className={styles.boxHeader}>in the box</h2>
        <ul>
          <li>
            <span>{props.includesQty}</span>
            {props.includes}
          </li>
        </ul>
      </div>
      <div className={styles.gallery}>
        <div className={styles.imageContainer}>
          <Image src={props.srcGalleryOne} alt={props.altGalleryOne} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={props.srcGalleryTwo} alt={props.altGalleryTwo} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={props.srcGalleryThree} alt={props.altGalleryThree} />
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.imageContainer}>
          <Image src={props.srcOtherOne} alt={props.altOtherOne} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={props.srcOtherTwo} alt={props.altOtherTwo} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={props.srcOtherThree} alt={props.altOtherThree} />
        </div>
      </div>
    </div>
  );
};

export default productTemplate;
