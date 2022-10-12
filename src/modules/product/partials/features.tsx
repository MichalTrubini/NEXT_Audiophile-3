import styles from "./features.module.css";
import data from "../../../../data.json";
import { IPage } from "../../../shared/types/types";

const Features:React.FC<IPage> = (props) => {

  const page = props.page;
  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <div className={styles.features}>
      <div className={styles.featuresContent}>
        <h2 className={styles.header}>features</h2>
        <p className={styles.featuresText}>{productData[0].features}</p>
      </div>
      <div className={styles.includes}>
        <h2 className={styles.header}>in the box</h2>
        <ul>
          {productData[0].includes.map((item) => (
            <li className={styles.listItem} key={item.item}>
              <span className={styles.quantity}>{`${item.quantity}x`}</span>
              <span className={styles.boxContent}>{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
