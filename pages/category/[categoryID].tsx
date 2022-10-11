import PageTitle from "../../src/modules/category/pageTitle";
import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import data from "../../data.json";
import ProductsCategory from "../../src/modules/category/productsCategory";
import useMediaQuery from "../../utils/hooks";
import { IPage } from "../../src/shared/types/types";

const PageCategory:React.FC<IPage> = ({page}) => {

  const categoryData = data.filter((item) => item.category.includes(page));

  //breakpoints for responsivity
  //these numbers can be changed based on what looks good

  const breakpointMobileWidth = 451;
  const breakpointTabletWidthBottom = 450;
  const breakpointTabletWidthTop = 951;

  const breakpointMobile = useMediaQuery(
    `(width < ${breakpointMobileWidth}px)`
  );
  const breakpointTabletBottomLimit = useMediaQuery(
    `(width > ${breakpointTabletWidthBottom}px`
  );
  const breakpointTabletTopLimit = useMediaQuery(
    `(width < ${breakpointTabletWidthTop}px`
  );
  const breakpointTablet =
    breakpointTabletBottomLimit && breakpointTabletTopLimit;

  return (
    <div>
      <PageTitle title={page} />
      <div className="container">
        <div className="categoryProducts">
          {categoryData.map((item, index) => (
            <ProductsCategory
              key={item.id}
              src={
                breakpointMobile
                  ? item.categoryImage.mobile
                  : breakpointTablet
                  ? item.categoryImage.tablet
                  : item.categoryImage.desktop
              }
              new={item.new}
              alt={item.name}
              className={index % 2 ? "productEven" : "productOdd"}
              title={item.name}
              slug={item.slug}
              about={item.description}
            />
          ))}
        </div>

        <Categories />
        <Promo />
      </div>
    </div>
  );
};

export async function getStaticProps(context:any) {
  const page:string = String(context.params.categoryID);

  return {
      props: {
        page:page
  }}
}

export async function getStaticPaths() {

  const paths = data.map((item)=>({params: {categoryID: item.category}}))

  return {
    paths: paths,
    fallback: false
  }
}

export default PageCategory;
