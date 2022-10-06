import styles from "./gallery.module.css";
import Image from "next/image";
import data from "../../../../data.json";
import { useRouter } from "next/router";

const Gallery = () => {
  const router = useRouter();
  const page = String(router.query.productID);

  const productData = data.filter((item) => item.slug.includes(page));

  return (
    <section className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={productData[0].gallery.first.mobile}
          alt={productData[0].name}
          width='327'
          height='174'
          layout="responsive"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={productData[0].gallery.second.mobile}
          alt={productData[0].name}
          width='327'
          height='174'
          layout="responsive"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={productData[0].gallery.third.mobile}
          alt={productData[0].name}
          width='327'
          height='368'
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Gallery;
