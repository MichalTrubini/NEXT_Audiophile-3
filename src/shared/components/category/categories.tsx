import styles from "./categories.module.css";
import Image from "next/image";
import earphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../../../../public/assets/shared/desktop/icon-arrow-right.svg";

const Categories = () => {
  const categoryData = [
    {
      id: 1,
      title: "headphones",
      src: headphones,
    },
    {
      id: 2,
      title: "speakers",
      src: speakers,
    },
    {
      id: 3,
      title: "earphones",
      src: earphones,
    },
  ];

  return (
    <div className={styles.categories}>
      {categoryData.map((item) => (
        <div className={styles.category} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src={item.src} alt={item.title} />
          </div>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.ctaContainer}>
            <p className={styles.cta}>Shop</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
