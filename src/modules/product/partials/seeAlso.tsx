import styles from "./seeAlso.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import ButtonLink from "../../../shared/components/UI/buttonLink";
import { IPage } from "../../../shared/types/types";

const SeeAlso:React.FC<IPage> = (props) => {

  const page = props.page;

  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <section className={styles.others}>
      <h2 className={styles.header}>you may also like</h2>
      <div className={styles.container}>
        {productData[0].others.map((item) => (
          <div className={styles.wrapper} key={item.slug}>
            <div className={`${styles.imageContainer} ${styles.imageMobile}`}>
              <Image
                src={item.image.mobile}
                alt={item.name}
                width='654'
                height='240'
                layout="responsive"
              />
            </div>
            <div className={`${styles.imageContainer} ${styles.imageTablet}`}>
              <Image
                src={item.image.tablet}
                alt={item.name}
                width='223'
                height='318'
                layout="responsive"
              />
            </div>
            <div className={`${styles.imageContainer} ${styles.imageDesktop}`}>
              <Image
                src={item.image.desktop}
                alt={item.name}
                width='700'
                height='636'
                layout="responsive"
              />
            </div>
            <h2 className={styles.productHeader}>{item.name}</h2>
            <ButtonLink text="see product" className="buttonLight" link={`/product/${item.slug}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeeAlso;
