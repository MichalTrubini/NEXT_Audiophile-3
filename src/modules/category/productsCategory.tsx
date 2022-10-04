import styles from "./productsCategory.module.css";
import Image from "next/image";
import ButtonLink from "../../shared/components/UI/buttonLink";

interface Products {
  src: string;
  alt: string;
  title: string;
  about: string;
  new: boolean;
  width: number;
  height: number;
  className:string;
  slug: string;
}

const ProductsCategory: React.FC<Products> = (props) => {
  return (
    <div className={`${styles.product} ${props.className}`}>
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
        {props.new === true && <p className={styles.subtitle}>new product</p>}
        <h1 className={styles.header}>{props.title}</h1>
        <p className={styles.about}>{props.about}</p>
        <ButtonLink className="buttonLight" text="see product" link={`/product/${props.slug}`}/>
      </div>
    </div>
  );
};

export default ProductsCategory;
