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
    width: number;
    height: number;
    className:string;
    slug: string;
  }