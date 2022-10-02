import styles from "./productsCategory.module.css";
import Image from "next/image";
import Button from "../../shared/components/UI/button";

interface Products {
  src: string;
  alt: string;
  title: string;
  about: string;
  new: string;
  width: number;
  height: number;
}

const ProductsCategory: React.FC<Products> = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <Image
          src={props.src}
          alt={props.alt}
          layout="responsive"
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.subtitle}>{props.new}</p>
        <h1 className={styles.header}>{props.title}</h1>
        <p className={styles.about}>{props.about}</p>
        <Button className="buttonLight" text="see product" />
      </div>
    </div>
  );
};

export default ProductsCategory;
