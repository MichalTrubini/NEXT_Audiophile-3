import Categories from "../category/categories";
import styles from './mobileMenu.module.css'

const MobileMenu = (props:any) => {

    const closeModalHandler = () => {
        props.closeModal()
    }

  return (
    <>
      <div className="overlay"></div>
      <div className={styles.wrapper}>
        <Categories 
          classNameImage = {styles.image}
          classNameCategories ={styles.categories}
          classNameHeader = {styles.header}
          classNameCategory = {styles.category}
          onClick={closeModalHandler}
        />
      </div>
    </>
  );
};

export default MobileMenu;
