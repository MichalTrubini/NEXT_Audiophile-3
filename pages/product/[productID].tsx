import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import ProductTemplate from "../../src/modules/product/productTemplate";

const ProductSingle = () => {

  return (
    <div className="container">
      <ProductTemplate/>
      <Categories />
      <Promo />
    </div>
  );
};

export default ProductSingle;
