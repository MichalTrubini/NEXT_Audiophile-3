import styles from "./seeAlso.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import { useRouter } from "next/router";
import ButtonLink from "../../../shared/components/UI/buttonLink";

const SeeAlso = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <section className={styles.others}>
      <h2 className={styles.header}>you may also like</h2>
      <div className={styles.container}>
        {productData[0].others.map((item) => (
          <div>
            <div className={styles.imageContainer}>
              <Image
                src={item.image.mobile}
                alt={item.name}
                width="654"
                height="240"
                layout="responsive"
              />
            </div>
            <h2 className={styles.productHeader}>{item.name}</h2>
            <ButtonLink text='see product' className='buttonLight' link=''/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeeAlso;
