import styles from "./productTemplate.module.css";
import Features from "./partials/features";
import ProductMain from "./partials/productMain";
import Gallery from "./partials/gallery";
import SeeAlso from "./partials/seeAlso";
import {IPage} from '../../../src/shared/types/types'

const ProductTemplate:React.FC<IPage> = (props) => {

  return (
    
    
    <div className={styles.product}>
      <ProductMain page={props.page}/>
      <Features page={props.page}/>
      <Gallery page={props.page}/>
      <SeeAlso page={props.page}/>
    </div>
  );
};

export default ProductTemplate;
