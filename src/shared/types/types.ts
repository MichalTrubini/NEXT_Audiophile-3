export interface IFeatures {
    features: string;
}

export interface IProductMain {
    title: string;
    srcMain: string;
    altMain: string;
    width: number;
    height: number;
    about: string;
    price: number;
    new: boolean;
}

export interface IGallery {
    srcOne: string;
    altOne: string;
    srcTwo: string;
    altTwo: string;
    srcThree: string;
    altThree: string;
    widthSmall: number;
    heightSmall: number;
    widthLarge: number;
    heightLarge: number
}

export interface IProductTemplate {
    title: string;
    srcMain: string;
    altMain: string;
    width: number;
    height: number;
    about: string;
    price: number;
    new: boolean;
    features: string;
    srcOne: string;
    altOne: string;
    srcTwo: string;
    altTwo: string;
    srcThree: string;
    altThree: string;
    widthSmall: number;
    heightSmall: number;
    widthLarge: number;
    heightLarge: number
  }

export interface IButtonLink {
    text:string,
    className:string
    link:string
}