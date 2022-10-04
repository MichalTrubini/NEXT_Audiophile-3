import styles from "./productTemplate.module.css";
import Image from "next/image";
import AddToCart from "./addToCart";

interface ProductTemplate {
  title: string;
  srcMain: string;
  altMain: string;
  width: number;
  height: number;
  about: string;
  price: number;
  new: boolean;
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

const ProductTemplate: React.FC<ProductTemplate> = (props) => {
  /*   <div className={styles.box}>
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
</div> */

  return (
    <div className={styles.product}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={props.srcMain}
            alt={props.altMain}
            layout="responsive"
            width={props.width}
            height={props.height}
          />
        </div>
        <div className={styles.content}>
          {props.new && <p className={styles.subtitle}>new product</p>}
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.about}>{props.about}</p>
          <p className={styles.price}>{`$ ${(props.price).toLocaleString('en-US')}`}</p>
          <form className={styles.form}>
            <input type="number"  className={styles.input}/>
            <AddToCart
              className="buttonLight"
              text="add to cart"
            />
          </form>
        </div>
      </div>
      <div className={styles.features}>
        <h2 className={styles.featuresHeader}>features</h2>
        <p className={styles.featuresContent}>{props.features}</p>
      </div>
    </div>
  );
};

export default ProductTemplate;
