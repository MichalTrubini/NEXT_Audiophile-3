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

  export interface IAddToCart {
    id:number;
    title: string;
    abbrev:string;
    price: number;
    image:string
  }

  export interface ICategories {
    classNameImage?:string;
    classNameCategories?:string;
    onClick?:any;
    classNameHeader?:string;
    classNameCategory?:string
  }

  export interface IModal {
    closeModal(): any;
  }

export interface ITitle {
    title: string
}
