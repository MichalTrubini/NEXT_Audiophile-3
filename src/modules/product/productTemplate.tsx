import styles from "./productTemplate.module.css";
import Features from "./partials/features";
import ProductMain from "./partials/productMain";
import Gallery from "./partials/gallery";
import SeeAlso from "./partials/seeAlso";

const ProductTemplate = () => {

  return (
    <div className={styles.product}>
      <ProductMain/>
      <Features />
      <Gallery />
      <SeeAlso />
    </div>
  );
};

export default ProductTemplate;
