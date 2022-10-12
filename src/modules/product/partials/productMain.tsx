import Image from "next/image";
import styles from "./productMain.module.css";
import data from "../../../../data.json";
import AddToCart from "./addToCart";
import { IPage } from "../../../../src/shared/types/types";

const ProductMain: React.FC<IPage> = (props) => {
  const page = props.page;

  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <div className={styles.productIntro}>
      <div className={`${styles.imageContainer} ${styles.imageMobile}`}>
        <Image
          src={productData[0].image.mobile}
          alt={productData[0].name}
          layout="responsive"
          width="654"
          height="654"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageTablet}`}>
        <Image
          src={productData[0].image.tablet}
          alt={productData[0].name}
          layout="responsive"
          width="562"
          height="960"
        />
      </div>
      <div className={`${styles.imageContainer} ${styles.imageDesktop}`}>
        <Image
          src={productData[0].image.desktop}
          alt={productData[0].name}
          layout="responsive"
          width="1080"
          height="1120"
        />
      </div>
      <div className={styles.content}>
        {productData[0].new && <p className={styles.subtitle}>new product</p>}
        <h1 id="titleOfItem" className={styles.title}>
          {productData[0].name}
        </h1>
        <p className={styles.about}>{productData[0].description}</p>
        <p
          id="pricePerItem"
          className={styles.price}
        >{`$ ${productData[0].price.toLocaleString("en-US")}`}</p>
        <AddToCart
          id={productData[0].id}
          title={productData[0].name}
          abbrev={productData[0].abbrev}
          image={productData[0].cartImage}
          price={productData[0].price}
        />
      </div>
    </div>
  );
};

export default ProductMain;
