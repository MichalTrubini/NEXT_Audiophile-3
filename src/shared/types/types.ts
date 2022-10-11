export interface IFeatures {
    features: string;
}

export interface IButtonLink {
    text:string,
    className:string
    link:string
}

export interface IProductsCategory {
    src: string;
    alt: string;
    title: string;
    about: string;
    new: boolean;
    className:string;
    slug: string;
  }

  export interface IPage {
    page:string
  }