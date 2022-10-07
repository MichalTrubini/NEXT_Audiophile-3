import PageTitle from "../../src/modules/category/pageTitle";
import Categories from "../../src/shared/components/category/categories";
import Promo from "../../src/shared/components/content/promo";
import { useRouter } from "next/router";
import data from "../../data.json";
import ProductsCategory from "../../src/modules/category/productsCategory";
import useMediaQuery from "../../utils/hooks";

const PageCategory = () => {
  const router = useRouter();
  const page = String(router.query.categoryID);
  
  const categoryData = data.filter((item) => item.category.includes(page));

  //breakpoints for responsivity
  //these numbers can be changed based on what looks good

  const breakpointMobileWidth = 451;
  const breakpointTabletWidth = 450;
  const breakpointDesktopWidth = 950;

  //size (width, height) of the original image
  //it is required to set width/height explicitly due to Image layout='responsive' props
  //these numbers are fixed and should not be changed

  const mobileWidthImage = 654;
  const mobileHeightImage = 704;
  const tabletWidthImage = 1378;
  const tabletHeightImage = 704;
  const desktopWidthImage = 1080;
  const desktopHeightImage = 1120;

  const breakpointMobile = useMediaQuery(`(width < ${breakpointMobileWidth}px)`)
  const breakpointTabletBottomLimit = useMediaQuery(`(width > ${breakpointTabletWidth}px`)
  const breakpointTabletTopLimit = useMediaQuery(`(width < ${breakpointDesktopWidth}px`)
  const breakpointTablet = breakpointTabletBottomLimit && breakpointTabletTopLimit
  const breakpointDesktop = useMediaQuery(`(width > ${breakpointDesktopWidth}px)`)

  const imageWidth = () => {
    if (breakpointMobile) return mobileWidthImage;
    if (breakpointTablet) return tabletWidthImage;
    if (breakpointDesktop) return desktopWidthImage;
  };

  const imageHeight = () => {
    if (breakpointMobile) return mobileHeightImage;
    if (breakpointTablet) return tabletHeightImage;
    if (breakpointDesktop) return desktopHeightImage;
  }

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
              className={index % 2 ? 'productEven' : 'productOdd'}
              title={item.name}
              slug={item.slug}
              about={item.description}
              width={imageWidth()!}
              height={imageHeight()!}
            />
          ))}
        </div>

        <Categories />
        <Promo />
      </div>
    </div>
  );
};

export default PageCategory;
